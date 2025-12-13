# Task 0: Basic TypeScript with Vanilla JavaScript

This task demonstrates the setup of a basic TypeScript project that uses Webpack to bundle code and renders content using Vanilla JavaScript.

## Objective

1.  **Define an Interface**: Create a `Student` interface with the following properties:
    -   `firstName` (string)
    -   `lastName` (string)
    -   `age` (number)
    -   `location` (string)

2.  **Create Objects**: Create two students (objects) that adhere to the `Student` interface.

3.  **Store in Array**: Store the two students in an array named `studentsList`.

4.  **Render Table**: Using Vanilla JavaScript, render a table and for each element in the array, append a new row to the table.
    -   Each row should display the student's `firstName` and `location`.

## Project Structure

-   `js/main.ts`: The main TypeScript source file containing the logic.
-   `package.json`: Contains project dependencies and scripts.
-   `tsconfig.json`: TypeScript configuration file.
-   `webpack.config.js`: Webpack configuration for bundling the application.
-   `dist/`: The output directory for the bundled code (generated after build).

## Setup and Usage

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Build the Project**:
    ```bash
    npm run build
    ```
    This command compiles the TypeScript code and bundles it using Webpack. The output `bundle.js` will be generated in the `dist` folder.

3.  **No Test Specified**:
    Running `npm test` will currently output "Error: no test specified".

## Requirements

-   The code is written in Vanilla JavaScript (via TypeScript), not using any frameworks like React or Vue.
-   Webpack is used for the build process.
