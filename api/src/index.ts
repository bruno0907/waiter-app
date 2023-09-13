import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './router';
dotenv.config();

const databaseUrl = process.env.DATABASE_URL!;

const app = express();
app.use(express.json());

mongoose.connect(databaseUrl)
  .then(() => {
    console.log('🗳️ Conectado ao MongoDB!!!');

    app.use(router);
    app.listen(3333, () => {
      console.log('🔥 Server is running on http://localhost:3333!!!');
    });
  })
  .catch(() => console.log('❌ Erro ao se conectar ao MongoDB!!!'));


