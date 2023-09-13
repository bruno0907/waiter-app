import { Request, Response } from 'express';

export function listProducts (req: Request, res: Response) {
  return res.json({
    status: 'OK',
    endpoint: '/products',
    method: 'listProducts'
  });
}
