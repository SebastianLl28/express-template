import { Router } from 'express'
import { deleteUser, getUserById, getUsers, postUser, putUser } from '../controller/user.controller'
import schemaValidator from '../middleware/schemaValidator.middleware'
import { createUserSchema, deleteUserSchema, getUserSchema, updateUserSchema } from '../schema/user.schema'
import { jwtValidator } from '../middleware/jwt.middeware'

const router = Router()

/**
 * @swagger
 * /user:
 *  get:
 *   summary: Get all users
 *   description: Get all users
 *   tags: [User]
 *   security:
 *    - bearerAuth: []
 *   produces:
 *    - application/json
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 *    401:
 *     description: Unauthorized
 */
router.get('/', jwtValidator, getUsers)

/**
 * @swagger
 * /user/{id}:
 *  get:
 *   summary: Get user by id
 *   description: Get user by id
 *   tags: [User]
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: User id
 *      schema:
 *       type: integer
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 */
router.get('/:id', jwtValidator, schemaValidator(getUserSchema), getUserById)

/**
 * @swagger
 * /user:
 *  post:
 *   summary: Create user
 *   description: Create user
 *   tags: [User]
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *        properties:
 *         name:
 *          type: string
 *         address:
 *          type: string
 *         email:
 *          type: string
 *          format: email
 *         password:
 *          type: string
 *   responses:
 *    201:
 *     description: Success
 */
router.post('/', jwtValidator, schemaValidator(createUserSchema), postUser)

/**
 * @swagger
 * /user:
 *  put:
 *   summary: Update user
 *   description: Update user
 *   tags: [User]
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       properties:
 *        name:
 *         type: string
 *        address:
 *         type: string
 *        email:
 *         type: string
 *         format: email
 *   responses:
 *    200:
 *     description: Success
 */
router.put('/', jwtValidator, schemaValidator(updateUserSchema), putUser)

/**
 * @swagger
 * /user/{id}:
 *  delete:
 *   summary: Delete user
 *   description: Delete user
 *   tags: [User]
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: User id
 *      schema:
 *       type: integer
 *   responses:
 *    200:
 *     description: Success
 *    401:
 *     description: Unauthorized
 */
router.delete('/:id', jwtValidator, schemaValidator(deleteUserSchema), deleteUser)

export default router
