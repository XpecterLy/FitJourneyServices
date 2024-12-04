import express from 'express';
import 'dotenv/config'

import { routesV1 } from './routes/routes';
import {connectToDatabase} from './config/db'

require('dotenv').config()

const app = express();
app.use(express.json());

connectToDatabase();

routesV1(app);

const port = process.env.PORT;
app.listen(port || 3001, () => {
  console.log(`Server is running on http://localhost:${port}`);
});