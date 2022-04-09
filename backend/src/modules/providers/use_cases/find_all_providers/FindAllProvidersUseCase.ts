import { Provider } from '@prisma/client';
import { prisma } from '../../../../database/PrismaClient';

class FindAllProvidersUseCase {
  async execute(): Promise<Provider[]> {
    const providers = await prisma.provider.findMany();

    return providers;
  }
}

export { FindAllProvidersUseCase };
