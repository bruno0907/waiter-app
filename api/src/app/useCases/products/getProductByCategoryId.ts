import { Request, Response } from 'express';

export function getProductByCategoryId (req: Request, res: Response) {
  return res.json({
    status: 'OK',
    endpoint: '/categories/:categoryId/products',
    method: 'getProductByCategoryId'
  });
}
