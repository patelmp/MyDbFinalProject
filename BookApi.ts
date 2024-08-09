import { Request, Response } from 'express';
import { DataSource } from 'typeorm';
import { Book } from './entities/Book'; // Ensure the correct path to your Book entity 

export class BookApi {
    constructor(private dataSource: DataSource) {}

    // Get all books
    async getAllBooks(req: Request, res: Response): Promise<void> {
        try {
            const books = await this.dataSource.getRepository(Book).find();
            res.json(books);
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Get a book by ID
    async getBookById(req: Request, res: Response): Promise<void> {
        const bookId = parseInt(req.params.id);
        try {
            const book = await this.dataSource.getRepository(Book).findOneBy({ id: bookId });
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json(book);
        } catch (error) {
            console.error('Error fetching book:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    // Create a new book
    async createBook(req: Request, res: Response): Promise<void> {
        const bookData = req.body;
        try {
            const book = this.dataSource.getRepository(Book).create(bookData);
            const savedBook = await this.dataSource.getRepository(Book).save(book);
            res.status(201).json(savedBook);
        } catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ message: 'Error creating book' });
        }
    }

    // Update a book
    async updateBook(req: Request, res: Response): Promise<void> {
        const bookId = parseInt(req.params.id);
        const bookData = req.body;
        try {
            const book = await this.dataSource.getRepository(Book).findOneBy({ id: bookId });
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            const updatedBook = this.dataSource.getRepository(Book).merge(book, bookData);
            const result = await this.dataSource.save(updatedBook);
            res.json(result);
        } catch (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ message: 'Error updating book' });
        }
    }

    // Delete a book
    async deleteBook(req: Request, res: Response): Promise<void> {
        const bookId = parseInt(req.params.id);
        try {
            const result = await this.dataSource.getRepository(Book).delete(bookId);
            if (result.affected === 0) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ message: 'Error deleting book' });
        }
    }
}
