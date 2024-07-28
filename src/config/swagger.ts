import swaggerJsdoc, { OAS3Definition, Options } from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Express template with Swagger',
    version: '1.0.0',
    description: 'API with Swagger'
  },
  servers: [
    {
      url: 'http://localhost:3000'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'number'
          },
          name: {
            type: 'string'
          },
          email: {
            type: 'string',
            format: 'email'
          },
          password: {
            type: 'string'
          },
          address: {
            type: 'string'
          },
          status: {
            type: 'string',
            enum: ['ACTIVE', 'INACTIVE', 'UNVERIFIED']
          }
        }
      }
    }
  }
}

const options: Options = {
  swaggerDefinition,
  apis: ['src/router/*.ts']
}

export const swaggerDocs = swaggerJsdoc(options)
