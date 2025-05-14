import express from 'express';
import bookRoutes from './routes/bookRoutes'; // Ensure this path is correct

const app = express();

app.use(express.json());

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
