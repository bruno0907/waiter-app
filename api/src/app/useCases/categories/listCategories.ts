import { Request, Response } from 'express';

export function listCategories(req: Request, res: Response) {
  return res.json({
    status: 'OK',
    endpoint: '/categories',
    method: 'listCategories'
  });
}
