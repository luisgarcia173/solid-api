import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router  = Router();

router.get('/healthcheck', (req, res) => res.sendStatus(200));

router.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

export { router };