import { prisma } from '../../../../database/PrismaClient';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';

class DeleteProviderUseCase {
  async execute(uid: string): Promise<void> {
    const provider = await prisma.provider.findUnique({ where: { uid } });

    if (!provider) {
      throw new AppError({
        message: 'Provider does not exists',
        status: ResponseCode.NotFound,
      });
    }

    await prisma.provider.delete({ where: { uid } });
  }
}

export { DeleteProviderUseCase };
