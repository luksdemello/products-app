import { Product } from '@prisma/client';

interface ICreateProductRequest {
  data: Omit<Product, 'uid' | 'image_url'>;
  imageData: {
    image_name: string;
    image: string;
  };
}

export { ICreateProductRequest };
