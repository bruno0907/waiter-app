import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './router';
import path from 'node:path';
dotenv.config();

const databaseUrl = process.env.DATABASE_URL!;

mongoose.connect(databaseUrl)
  .then(() => {
    console.log('🗳️ Conectado ao MongoDB!!!');

    const app = express();

    app.use(express.json());
    app.use(router);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.listen(3333, () => {
      console.log('🔥 Server is running on http://localhost:3333!!!');
    });
  })
  .catch(() => console.log('❌ Erro ao se conectar ao MongoDB!!!'));


