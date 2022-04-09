import { Provider } from '@prisma/client';

interface IUpdateProviderRequest {
  provider: Omit<Provider, 'uid'>;
  uid: string;
}

export { IUpdateProviderRequest };
