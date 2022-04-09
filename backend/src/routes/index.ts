import { Router } from 'express';
import { providerRouter } from './provider.routes';

const router = Router();

router.use('/providers', providerRouter);

export { router };
