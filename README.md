# TMSimple

Simple Test Case Management System

Self-Study project to update knowledge about:

-   Nodejs
-   Express
-   Mongodb
-   Jest
-   ESLint
-   Prettier
-   Docker
-   Github Workflows

## Getting started

1. Start the `tmsimple server` service (and any others) in the background:

    ```bash
    docker-compose up -d
    ```

1. The server is running on <http://localhost:3000>.

## Test

| Component | Test Type      | Technology | Command                         |
| --------- | -------------- | ---------- | ------------------------------- |
| Server    | Unit Test      | Jest       | `npm run unit-test:server`      |
| Server    | Component Test | Jest       | `npm run component-test:server` |
| Server    | E2E / API Test | Cypress    | `npm run api-test`              |
