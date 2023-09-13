import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory (req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const productsByCategory = await Product.find().where('category').equals(categoryId);

    return res.json(productsByCategory);
  } catch (error) {
    return res.sendStatus(500);
  }
}
