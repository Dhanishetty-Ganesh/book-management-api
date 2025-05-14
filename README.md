# Book Management API

This is a simple REST API for managing books. The API allows you to perform CRUD operations on books, including creating, reading, updating, and deleting books. It also supports importing books from a CSV file.

## Features
- Createa new book
- Get all books or a specific book by ID
- Update an existing book
- Delete a book
- Import books from a CSV file

## Tech Stack
- Node.js, TypeScript, Express
- Multer for file upload handling

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/)

### Installation
1. Clone the repo:
   git clone https://github.com/your-username/book-management-api.git
2.Install Dependencies
    npm install 
3.Running the API
Start the server:
npm run dev
The server will run at http://localhost:3000.

API Endpoints:
POST /api/books - Create a new book
GET /api/books - Get all books
GET /api/books/:id - Get a specific book by ID
PUT /api/books/:id - Update a book
DELETE /api/books/:id - Delete a book
POST /api/books/import - Import books from a CSV file

Running Tests
To run tests, use:
npm test
