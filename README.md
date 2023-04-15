# APIRestFull Mazuzoe Store

This is the README for the API REST project with Express and FS as information persistence.

## Description

This project is a REST API that allows CRUD (Create, Read, Update, and Delete) operations on a simulated database using FS as information persistence. The API has been created using Node.js and the Express framework.
Technologies used

The following technologies have been used in this project:

  - Node.js: version 18.13.0
  - Express: version 4.18.2

## API routes

The API has the following routes:

  - GET /elements
    This route returns an array with all elements in the database.

  - GET /elements/:id
    This route returns the element corresponding to the ID provided in the URL.

  - POST /elements
    This route creates a new element in the database. The element must be provided in the body of the request.

  - PATCH /elements/:id
    This route updates the element corresponding to the ID provided in the URL. The changes must be provided in the body of the request.

  - DELETE /elements/:id
    This route deletes the element corresponding to the ID provided in the URL.

## Libraries used

The following libraries have been used in this project:

  - dotenv: to load environment variables from a .env file.
  - body-parser: to parse the body of HTTP requests.
  - joi: to validate input data.
  - http-status: to use HTTP status codes easily.
  - morgan: for log management.

## Installation and usage

  1. Clone the repository.
  2. Install dependencies with the command npm install.
  3. Create a .env file in the root of the project and set the necessary environment variables (for example, the port on which the API will run).
  4. Run the API with the command npm start.
