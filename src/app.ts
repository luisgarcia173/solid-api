import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json()); // Parse json object
app.use(router);

export { app };