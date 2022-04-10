import { Router } from 'express';
import { createProductController } from '../modules/products/use_cases/create_product/CreateProductController';

const productsRouter = Router();

productsRouter.post('/', createProductController.handler);

export { productsRouter };
