import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './router';
import path from 'node:path';
import http from 'node:http';
import socketIo from 'socket.io';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL!;

const app = express();
const server = http.createServer(app);
export const io = new socketIo.Server(server);

mongoose.connect(databaseUrl)
  .then(() => {
    console.log('🗳️ MongoDB connected!');

    io.on('connect', () => {
      console.log('📞 Socket.io connected!' );
    });

    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    server.listen(3333, () => {
      console.log('🔥 Server running @ http://localhost:3333!');
    });
  })
  .catch(() => console.log('❌ MongoDB connection error!'));


