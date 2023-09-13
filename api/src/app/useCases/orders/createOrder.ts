import { Request, Response } from 'express';

export function createOrder (req: Request, res: Response) {
  return res.status(201).json({
    status: 'OK',
    endpoint: '/orders',
    method: 'createOrder'
  });
}
