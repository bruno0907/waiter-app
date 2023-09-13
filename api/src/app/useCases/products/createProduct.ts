import { Request, Response } from 'express';

export function createProduct (req: Request, res: Response) {
  return res.status(201).json({
    status: 'OK',
    endpoint: '/products',
    method: 'createProduct'
  });
}
