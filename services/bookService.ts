import { Book } from '../models/bookModel';
import { v4 as uuidv4 } from 'uuid';

let books: Book[] = [];

export const getAllBooks = () => books;

export const getBookById = (id: string) => books.find(b => b.id === id);

export const addBook = (bookData: Omit<Book, 'id'>): Book => {
  const newBook = { id: uuidv4(), ...bookData };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: string, data: Omit<Book, 'id'>): Book | null => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return null;
  books[index] = { id, ...data };
  return books[index];
};

export const deleteBook = (id: string): boolean => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};
