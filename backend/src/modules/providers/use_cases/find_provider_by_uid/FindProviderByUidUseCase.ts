import { Provider } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';

class FindProviderByUidUseCase {
  async execute(uid: string): Promise<Provider> {
    const provider = await prisma.provider.findUnique({
      where: {
        uid,
      },
      include: {
        address: true,
        products: true,
      },
    });

    if (!provider) {
      throw new AppError({
        message: 'Provider does not exists',
        status: ResponseCode.NotFound,
      });
    }

    return provider;
  }
}

export { FindProviderByUidUseCase };
