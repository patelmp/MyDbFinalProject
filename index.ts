import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { Book } from "./entity/Book"; // Assume Book entity is defined in entity/Book.ts

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to the database
createConnection().then(async connection => {
    console.log("Connected to the database.");

    // Get all books
    app.get("/books", async (req, res) => {
        const bookRepository = connection.getRepository(Book);
        const books = await bookRepository.find();
        res.json(books);
    });

    // Get a book by ID
    app.get("/books/:id", async (req, res) => {
        const bookRepository = connection.getRepository(Book);
        const book = await bookRepository.findOne(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    });

    // Create a new book
    app.post("/books", async (req, res) => {
        const bookRepository = connection.getRepository(Book);
        const newBook = bookRepository.create(req.body);
        await bookRepository.save(newBook);
        res.status(201).json(newBook);
    });

    // Update a book
    app.put("/books/:id", async (req, res) => {
        const bookRepository = connection.getRepository(Book);
        const book = await bookRepository.findOne(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        bookRepository.merge(book, req.body);
        const updatedBook = await bookRepository.save(book);
        res.json(updatedBook);
    });

    // Delete a book
    app.delete("/books/:id", async (req, res) => {
        const bookRepository = connection.getRepository(Book);
        const result = await bookRepository.delete(req.params.id);
        if (result.affected === 0) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(204).send();
    });

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => console.log("Error connecting to the database:", error));
