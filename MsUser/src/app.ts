import express from 'express';
import { routesV1 } from './routes/routes';
import {connectToDatabase} from './config/db'

const app = express();
app.use(express.json());

connectToDatabase();

routesV1(app);

const port: number = 3000;
app.listen(port || 3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});