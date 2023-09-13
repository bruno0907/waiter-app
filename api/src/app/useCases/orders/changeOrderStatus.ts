import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function changeOrderStatus (req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const orderStatusList = ['WAITING', 'IN_PRODUCTION', 'DONE'];

    if(!orderStatusList.includes(status)) {
      return res.status(400).json({ error: `Status should be one of these: ${orderStatusList.toString()}` });
    }

    const response = await Order.findByIdAndUpdate(orderId, { status });

    if(!response) {
      return res.sendStatus(400);
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.sendStatus(500);
  }
}
