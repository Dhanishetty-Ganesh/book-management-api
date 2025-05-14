import request from 'supertest';
import express from 'express';
import bookRoutes from '../routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/api', bookRoutes);

describe('POST /api/books', () => {
  it('should create a new book', async () => {
    const response = await request(app).post('/api/books').send({
      title: 'Test Book',
      author: 'Test Author',
      publishedYear: 2024,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Book');
  });
});
