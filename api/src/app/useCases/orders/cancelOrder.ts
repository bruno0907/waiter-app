import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrder (req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const response = await Order.findByIdAndUpdate(orderId, {
      status: 'CANCELED'
    });

    if(!response) {
      return res.sendStatus(400);
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
}
