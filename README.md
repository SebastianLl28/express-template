# Express Template

This is a basic template for Express applications using TypeScript. It includes configurations and tools to facilitate the development and maintenance of applications.

## Technologies

- **TypeScript**: For static type checking.
- **Express**: Server framework for Node.js.
- **Prisma**: ORM for interacting with databases.
- **MySQL**: Database management system.
- **Zod**: Library for data validation and schemas.
- **Swagger**: Tools for API documentation and testing.
- **Jest**: Framework for unit testing.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SebastianLl28/express-template.git
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure your environment file:**

   Create a `.env` file at the root of the project with your environment variables. You can use the `.env.example` file as a reference.

## Scripts

- **`pnpm build`**: Compiles the TypeScript project.
- **`pnpm start`**: Starts the application in production mode.
- **`pnpm dev`**: Starts the application in development mode with `nodemon`.
- **`pnpm test`**: Runs tests with coverage.
- **`pnpm lint`**: Runs the linter.
- **`pnpm lint:fix`**: Fixes issues found by the linter.
- **`pnpm prisma:init`**: Initializes Prisma with MySQL as the datasource provider.
- **`pnpm prisma:migrate`**: Runs Prisma migrations.
- **`pnpm prisma:seed`**: Resets and seeds the database with initial data.
- **`pnpm prisma:studio`**: Opens Prisma Studio to manage data.

## Contributing

1. Fork the repository.
2. Create a branch for your change (`git checkout -b my-change`).
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`git commit -m 'feat: :sparkles: add new feature'`).
4. Push your changes (`git push origin my-change`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.