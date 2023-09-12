import express, { Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const databaseUrl = process.env.DATABASE_URL!;

const app = express();
app.use(express.json());

app.get('/health', (_, res: Response) => {
  res.status(200).json({ status: 'healthy' });
  res.end();
});

mongoose.connect(databaseUrl)
  .then(() => {
    console.log('🗳️ Conectado ao MongoDB!!!');

    app.listen(3000, () => {
      console.log('🔥 Server is running on http://localhost:3000!!!');
    });
  })
  .catch(() => console.log('❌ Erro ao se conectar ao MongoDB!!!'));


