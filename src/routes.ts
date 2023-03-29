import { Router } from 'express';

const router  = Router();

router.get('/healthcheck', (req, res) => res.sendStatus(200));

router.post('/users', (req, res) => {
  return res.status(201).send();
});

export { router };