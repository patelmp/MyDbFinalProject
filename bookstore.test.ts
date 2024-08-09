import { DataSource } from 'typeorm';
import { Book } from './entities/Book'; // Ensure the correct path to your Book entity
import { createTestConnection } from './ormconfig.test'; // Assume this function creates a test connection

describe('Book Entity', () => {
  let connection: DataSource;
  let bookRepository: any;

  beforeAll(async () => {
    try {
      connection = await createTestConnection();
      bookRepository = connection.getRepository(Book);
    } catch (error) {
      console.error("Failed to create test connection:", error);
      throw error;
    }
  });

  afterAll(async () => {
    if (connection) {
      await connection.destroy();
    }
  });

  it('should create a new book', async () => {
    expect(connection).toBeDefined();
    const newBook = bookRepository.create({
      title: 'Test Book',
      bookLanguage: 'English',
      authId: 1,
      publisherId: 1,
      genre: 'Fiction',
      publicationDate: '2023-01-01',
      price: 19.99,
      pageCount: 300,
      isbn: '1234567890',
      bookDescription: 'A test book description',
      format: 'Physical'
    });
    const savedBook = await bookRepository.save(newBook);
    expect(savedBook).toBeDefined();
    expect(savedBook.bookId).toBeDefined();
    expect(savedBook.title).toBe('Test Book');
  });

  it('should read a book just created', async () => {
    const savedBook = await bookRepository.findOne({ where: { title: 'Test Book' } });
    expect(savedBook).toBeDefined();
    expect(savedBook.bookId).toBeDefined();
    expect(savedBook.title).toBe('Test Book');
  });

  it('should update a book', async () => {
    const savedBook = await bookRepository.findOne({ where: { title: 'Test Book' } });
    if (!savedBook) {
      throw new Error('Book not found');
    }
    savedBook.title = 'Updated Test Book';
    const updatedBook = await bookRepository.save(savedBook);
    expect(updatedBook).toBeDefined();
    expect(updatedBook.title).toBe('Updated Test Book');
  });

  it('should delete a book', async () => {
    const savedBook = await bookRepository.findOne({ where: { title: 'Updated Test Book' } });
    if (!savedBook) {
      throw new Error('Book not found');
    }
    await bookRepository.delete(savedBook.bookId);
    const deletedBook = await bookRepository.findOne({ where: { title: 'Updated Test Book' } });
    expect(deletedBook).toBeNull();
  });
});
