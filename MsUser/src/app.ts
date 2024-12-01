import express, { Request, Response } from 'express';
import { routesV1 } from './routes/routes';

const app = express();
app.use(express.json());

routesV1(app);

const port: number = 3000;
app.listen(port || 3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});