import { Router } from 'express';
import multer from 'multer';
import { createProductController } from '../modules/products/use_cases/create_product/CreateProductController';
import uploadConfig from '../shared/multer/upload';

const productsRouter = Router();
const upload = multer(uploadConfig);

productsRouter.post(
  '/',
  upload.single('file'),
  createProductController.handler,
);

export { productsRouter };
