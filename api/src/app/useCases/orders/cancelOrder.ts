import { Request, Response } from 'express';

export function cancelOrder (req: Request, res: Response) {
  return res.json({
    status: 'OK',
    endpoint: '/orders/:orderId',
    method: 'cancelOrder'
  });
}
