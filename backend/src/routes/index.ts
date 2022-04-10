import { Router } from 'express';
import { productsRouter } from './products.routes';
import { providerRouter } from './provider.routes';

const router = Router();

router.use('/providers', providerRouter);
router.use('/products', productsRouter);

export { router };
