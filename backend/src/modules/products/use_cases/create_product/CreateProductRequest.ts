import { Product } from '@prisma/client';

interface ICreateProductRequest {
  data: Omit<Product, 'uid' | 'image_url'>;
  file: Express.Multer.File | null;
}

export { ICreateProductRequest };
