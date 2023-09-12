import { Request, Response } from 'express';

export function createCategory(req: Request, res: Response) {
  res.json({
    status: 'OK',
    endpoint: '/categories',
    method: 'createCategory'
  });
}
