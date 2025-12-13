# Task 1: Teacher Interface

This task implements a `Teacher` interface with specific rules using TypeScript.

## Requirements

-   `firstName` and `lastName`: Readonly strings, modifiable only on initialization.
-   `fullTimeEmployee`: Boolean, always defined.
-   `location`: String, always defined.
-   `yearsOfExperience`: Optional number.
-   **Dynamic Properties**: The interface allows adding any other properties (like `contract`).

## Usage

The `main.ts` file defines the interface and creates an example object:

```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);
```

## Build

Run the build ensuring dependencies are installed:
```bash
npm install
npm run build
```
