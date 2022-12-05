# TMSimple

Simple Test Case Management System

Self-Study project to update knowledge about:

-   Nodejs
-   Express
-   React Js
-   Angular
-   Mongodb
-   Jest
-   Cypress
-   ESLint
-   Prettier
-   Docker
-   `Github Workflows`
-   Webpack

## Getting started

1. Start the `tmsimple server`, `tmsimple ui` services (and any others) in the background:

    ```bash
    docker-compose up -d
    ```

-   The server is running on <http://localhost:3000>.
-   The ui is running on <http://localhost:80>.

## Test

| Component | Test Type      | Technology | Command                         |
| --------- | -------------- | ---------- | ------------------------------- |
| Server    | Unit Test      | Jest       | `npm run unit-test:server`      |
| Server    | Component Test | Jest       | `npm run component-test:server` |
| Server    | E2E / API Test | Cypress    | `npm run api-test`              |
| UI        | Component Test | Cypress    | `npm run component-test:ui`     |
| UI        | E2E / GUI Test | Cypress    | `npm run ui-test`               |
