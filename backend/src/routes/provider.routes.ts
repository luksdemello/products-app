import { Router } from 'express';
import { createProviderController } from '../modules/providers/use_cases/create_provider/CreateProviderController';
import { findAllProvidersController } from '../modules/providers/use_cases/find_all_providers/FindAllProvidersController';

const providerRouter = Router();

providerRouter.post('/', createProviderController.handler);
providerRouter.get('/', findAllProvidersController.handler);

export { providerRouter };
