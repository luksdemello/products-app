import { Router } from 'express';
import { createProviderController } from '../modules/providers/use_cases/create_provider/CreateProviderController';
import { deleteProviderController } from '../modules/providers/use_cases/delete_provider/DeleteProviderController';
import { findAllProvidersController } from '../modules/providers/use_cases/find_all_providers/FindAllProvidersController';
import { findProviderByUidController } from '../modules/providers/use_cases/find_provider_by_uid/FindProviderByUidController';
import { updateProviderController } from '../modules/providers/use_cases/update_provider/UpdateProviderController';

const providerRouter = Router();

providerRouter.post('/', createProviderController.handler);
providerRouter.get('/', findAllProvidersController.handler);
providerRouter.get('/:uid', findProviderByUidController.handler);
providerRouter.put('/:uid', updateProviderController.handler);
providerRouter.delete('/:uid', deleteProviderController.handler);

export { providerRouter };
