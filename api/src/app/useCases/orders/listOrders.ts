import { Request, Response } from 'express';

export function listOrders (req: Request, res: Response) {
  return res.json({
    status: 'OK',
    endpoint: '/orders',
    method: 'listOrders'

  });
}
