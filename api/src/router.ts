import { Request, Response, Router } from 'express';
import { listCategories, createCategory } from './app/useCases';

export const router = Router();

// List Categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List Products
router.get('/products', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Create Product
router.post('/products', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Get Produt by Category
router.get('/categories/:categoryId/products', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// List Orders
router.get('/orders', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Create Order
router.post('/orders', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Change Order status
router.patch('/orders/:orderId', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});
