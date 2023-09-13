import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { getProductByCategoryId } from './app/useCases/products/getProductByCategoryId';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// Categories
router.get('/categories', listCategories);
router.post('/categories', createCategory);

// Products
router.get('/products', listProducts);
router.post('/products', createProduct);
router.get('/categories/:categoryId/products', getProductByCategoryId);

// Orders
router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', changeOrderStatus);
router.delete('/orders/:orderId', cancelOrder);
