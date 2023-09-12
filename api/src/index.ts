import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'healthy' });
  res.end();
});

app.listen(3000, () => {
  console.log('🔥 Server is running on http://localhost:3000');
});
