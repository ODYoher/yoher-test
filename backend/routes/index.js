import { Router } from 'express';

import recomendationRouter from './v1/recomendations.route';

const router = Router();
router.use('/api/v1', recomendationRouter);

export default [router];