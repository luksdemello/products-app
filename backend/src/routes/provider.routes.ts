import { Router } from 'express';
import { createProviderController } from '../modules/providers/use_cases/create_provider/CreateProviderController';

const providerRouter = Router();

providerRouter.post('/', createProviderController.handler);

export { providerRouter };
