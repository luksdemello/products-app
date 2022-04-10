import { Product } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { writeFile } from '../../../../utils/WriteFile';
import { ICreateProductRequest } from './CreateProductRequest';

class CreateProductUseCase {
  async execute({ data, imageData }: ICreateProductRequest): Promise<Product> {
    const imageBase64 = imageData.image.split(',')[1];
    const image_url = writeFile.upload(imageBase64, imageData.image_name);

    const product = await prisma.product.create({
      data: {
        active: data.active,
        description: data.description,
        image_url,
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
