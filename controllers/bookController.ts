import { Request, Response } from 'express';
import fs from 'fs';
import { Book } from '../models/bookModel';
import * as bookService from '../services/bookService';

export const getBooks = (req: Request, res: Response): Response => {
  const books = bookService.getAllBooks();
  return res.json(books);
};

export const getBook = (req: Request, res: Response): Response => {
  const book = bookService.getBookById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.json(book);
};

export const createBook = (req: Request, res: Response): Response => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || typeof publishedYear !== 'number') {
    return res.status(400).json({ message: 'Invalid input' });
  }
  const book = bookService.addBook({ title, author, publishedYear });
  return res.status(201).json(book);
};

export const updateBook = (req: Request, res: Response): Response => {
  const { title, author, publishedYear } = req.body;
  const updated = bookService.updateBook(req.params.id, { title, author, publishedYear });
  if (!updated) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.json(updated);
};

export const deleteBook = (req: Request, res: Response): Response => {
  const success = bookService.deleteBook(req.params.id);
  if (!success) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.json({ message: 'Book deleted successfully' });
};

export const importBooks = (req: Request, res: Response): Response => {
  const filePath = req.file?.path;
  if (!filePath) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');
  const errorRows: string[] = [];
  let count = 0;

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    const [title, author, publishedYear] = row.map(r => r.trim());

    if (!title || !author || isNaN(Number(publishedYear))) {
      errorRows.push(`Row ${i + 1}: Invalid data`);
      continue;
    }

    bookService.addBook({ title, author, publishedYear: Number(publishedYear) });
    count++;
  }

  fs.unlinkSync(filePath);
  return res.json({ addedBooksCount: count, errorRows });
};
