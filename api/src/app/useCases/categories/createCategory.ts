import { Request, Response } from 'express';

export function createCategory(req: Request, res: Response) {
  return res.status(201).json({
    status: 'OK',
    endpoint: '/categories',
    method: 'createCategory'
  });
}
