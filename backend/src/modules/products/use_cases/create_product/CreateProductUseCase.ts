import { Product } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { ICreateProductRequest } from './CreateProductRequest';

class CreateProductUseCase {
  async execute({ data, file }: ICreateProductRequest): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        active: data.active,
        description: data.description,
        image_url: file?.filename ?? '',
        name: data.name,
        price: data.price,
        provider_uid: data.provider_uid,
        created_at: data.created_at,
      },
    });

    return product;
  }
}

export { CreateProductUseCase };
