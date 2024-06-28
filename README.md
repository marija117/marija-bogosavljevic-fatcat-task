# marija-bogosavljevic-fatcat-task

In this project the following tasks are completed:

1. Transfering the existing project to TypeScript
2. Creating a List Component
3. Creating a Form Generator Component
4. Creating a Page Generator Component
5. Additional requirements that are provided

## Table of Contents

-   [Installation](#installation)
-   [Instructions](#nstructions)
-   [Testing](#testing)
-   [Explantion](#explination)
-   [Usage](#usage)
-   [Example](#example)

## Installation

1. Clone the repository:
   ` git clone git@github.com:marija117/marija-bogosavljevic-fatcat-task.git`

2. Navigate into the project directory:
   `cd homework-task`

3. Install dependencies:
   `npm install`

## Instructions

Once the project is set up you can:

1. Start the development server
   `npm run dev`
2. Check if there are any eslint errors
   `npx eslint . --ext .js,.jsx,.ts,.tsx --fix `
3. Open your browser and navigate to http://localhost:3000 to view the application.

## Testing

Run tests using Jest:
`npm test`

## Explanation

## FormGenerator Component

- **Validation**: Uses Zod schema for form validation
- **Rendering**: Dynamic form field rendering via `renderForm` prop
- **Submission**: Handles form state and async submission with `useForm` and `useMutation`
- **Error Handling**: Displays submission status and error messages

## PostForm Component

- **Schema**: Zod validation for title and body fields
- **UI**: Dynamic form rendering with Tailwind CSS styling
- **Submission**: Utilizes FormGenerator for handling successful submissions

## PageGenerator Component

- **Mapping**: Associates component types with React components
- **Dynamic Rendering**: Renders sections and components based on configuration
- **Flexible**: Separates layout from content for easy page composition

## Usage

1. Define your validation schema
2. Create a `renderForm` function
3. Use FormGenerator in your component
4. Configure sections and components for PageGenerator

## Example

```jsx
<FormGenerator
  validationSchema={schema}
  renderForm={renderForm}
  onSubmitSuccess={handleSuccess}
/>

<PageGenerator sections={pageConfig} />