import { Request, Response } from 'express';

export function changeOrderStatus (req: Request, res: Response) {
  return res.json({
    status: 'OK',
    endpoint: '/orders/:orderId',
    method: 'changeOrderStatus'
  });
}
