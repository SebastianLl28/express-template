import { Router } from 'express'
import { postLogin, putPassword, verifyToken } from '../controller/auth.controller'
import schemaValidator from '../middleware/schemaValidator.middleware'
import { loginSchema, updatePasswordSchema } from '../schema/auth.schema'
import { jwtValidator } from '../middleware/jwt.middeware'

const router = Router()

/**
 * @swagger
 * /auth/login:
 *  post:
 *   summary: Login
 *   description: Login
 *   tags: [Auth]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         format: email
 *        password:
 *         type: string
 *   responses:
 *    200:
 *     description: Success
 *    400:
 *     description: Bad Request
 */
router.post('/login', schemaValidator(loginSchema), postLogin)

/**
 * @swagger
 * /auth/password:
 *  put:
 *   summary: Update password
 *   description: Update password
 *   tags: [Auth]
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        password:
 *         type: string
 *        newPassword:
 *         type: string
 *        confirmNewPassword:
 *         type: string
 *   responses:
 *    200:
 *     description: Success
 *    400:
 *     description: Bad Request
 *    401:
 *     description: Unauthorized
 */
router.put('/password', jwtValidator, schemaValidator(updatePasswordSchema), putPassword)

/**
 * @swagger
 * /auth/verify:
 *  get:
 *   summary: Verify Token
 *   description: Verify Token
 *   tags: [Auth]
 *   security:
 *    - bearerAuth: []
 *   responses:
 *    200:
 *     description: Success
 *    401:
 *     description: Unauthorized
 */
router.get('/verify', jwtValidator, verifyToken)

export default router
