# Student API

A simple RESTful API for managing student data. This project supports basic CRUD operations (Create, Read, Update, Delete) on a Student entity with attributes such as ID, Name, Grade, and Email.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Environment Configuration](#environment-configuration)
- [Running the Service Locally](#running-the-service-locally)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Project Overview

This API was developed using **Node.js** and **Express**. It demonstrates a basic CRUD setup and is designed for educational purposes, to familiarize developers with RESTful API practices.

### Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Minimal web framework for creating RESTful APIs.
- **body-parser**: Middleware to parse incoming JSON requests.

## Setup and Installation

### Prerequisites

Ensure you have Node.js and npm installed on your system. You can download them from [Node.js official site](https://nodejs.org/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd student_api
   ```

## Environment Configuration

To configure the environment:

1. Ensure PORT (optional) is set in the .env file or your environment. The default is 3000.

2. Create a .env file with the following content:

```
PORT=3000
```

## Running the Service Locally

1. Start the server with:

```
node index.js
```

2. The API will be available at http://localhost:3000.

## API Endpoints

1. **GET /students**

   - **Description**: Retrieves a list of all students.
   - **Response**:
     - **Status**: 200 OK
     - **Body**: JSON array of student objects

2. **GET /students/{id}**

   - **Description**: Retrieves details of a specific student by ID.
   - **Path Parameter**: `id` (Integer) - Student ID.
   - **Response**:
     - **Status**: 200 OK or 404 Not Found
     - **Body**: JSON object of the student data

3. **POST /students**

   - **Description**: Adds a new student.
   - **Body**: JSON object with `id`, `name`, `grade`, and `email`.
   - **Response**:
     - **Status**: 201 Created
     - **Body**: JSON object of the created student

4. **PUT /students/{id}**

   - **Description**: Updates an existing student's details by ID.
   - **Path Parameter**: `id` (Integer) - Student ID.
   - **Body**: JSON object with optional fields to update (`name`, `grade`, `email`).
   - **Response**:
     - **Status**: 200 OK or 404 Not Found
     - **Body**: JSON object of the updated student

5. **DELETE /students/{id}**
   - **Description**: Deletes a student by ID.
   - **Path Parameter**: `id` (Integer) - Student ID.
   - **Response**:
     - **Status**: 200 OK or 404 Not Found
     - **Body**: JSON object of the deleted student

## Testing

To test the API, use **curl** commands, **Postman**, or other API testing tools. The parameters for each endpoint can be found in the [API Endpoints](#api-endpoints) section.

## Deployment

To deploy this API to **Azure Web App Service**, follow these steps:

1. **Create an Azure App Service** for Node.js.
2. **Push your code** to GitHub, then use the **Azure App Service Deployment Center** to connect your GitHub repository for automatic deployment.
