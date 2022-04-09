import { prisma } from '../../../../database/PrismaClient';
import { AppError } from '../../../../utils/AppError';
import { ResponseCode } from '../../../../utils/ResponseCode';
import { IUpdateProviderRequest } from './UpdateProviderRequest';

class UpdateProviderUseCase {
  async execute(request: IUpdateProviderRequest): Promise<void> {
    const provider = await prisma.provider.findUnique({
      where: { uid: request.uid },
    });

    if (!provider) {
      throw new AppError({
        message: 'Provider does not exists',
        status: ResponseCode.NotFound,
      });
    }

    const documentAlreadyExists = await prisma.provider.findUnique({
      where: { document: request.provider.document },
    });

    if (documentAlreadyExists) {
      throw new AppError({
        message: 'Document is already being used',
        status: ResponseCode.BadRequest,
      });
    }

    await prisma.provider.update({
      where: { uid: provider.uid },
      data: {
        name: request.provider.name,
        active: request.provider.active,
        document: request.provider.document,
        type: request.provider.type,
      },
    });
  }
}

export { UpdateProviderUseCase };
