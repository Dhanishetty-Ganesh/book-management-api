import express, { Request, Response } from 'express';
import * as bookController from '../controllers/bookController';

const router = express.Router();

router.get('/books', (req: Request, res: Response) => bookController.getBooks(req, res));
router.get('/books/:id', (req: Request, res: Response) => bookController.getBook(req, res));
router.post('/books', (req: Request, res: Response) => bookController.createBook(req, res));
router.put('/books/:id', (req: Request, res: Response) => bookController.updateBook(req, res));
router.delete('/books/:id', (req: Request, res: Response) => bookController.deleteBook(req, res));
router.post('/books/import', (req: Request, res: Response) => bookController.importBooks(req, res));

export default router;
