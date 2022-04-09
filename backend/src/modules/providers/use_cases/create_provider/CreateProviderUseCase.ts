import { Provider } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { ICreateProviderRequest } from './CreateProviderRequest';

class CreateProviderUseCase {
  async execute({
    provider,
    address,
  }: ICreateProviderRequest): Promise<Provider> {
    const providerAlreadyExists = await prisma.provider.findUnique({
      where: { document: provider.document },
    });

    if (providerAlreadyExists) {
      throw new AppError({
        message: 'Provider already exists',
        status: ResponseCode.BadRequest,
      });
    }

    const result = await prisma.provider.create({
      data: {
        name: provider.name,
        document: provider.document,
        active: provider.active,
        type: provider.type,
        address: {
          create: {
            ...address,
          },
        },
      },
      include: {
        address: true,
      },
    });

    return result;
  }
}

export { CreateProviderUseCase };
