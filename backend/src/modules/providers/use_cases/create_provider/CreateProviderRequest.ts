import { Address, Provider } from '@prisma/client';

interface ICreateProviderRequest {
  provider: Omit<Provider, 'uid'>;
  address: Omit<Address, 'uid'>;
}

export { ICreateProviderRequest };
