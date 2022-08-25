import express, { Express, Request, Response } from 'express';
import autoroutes from 'express-automatic-routes'
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env['PORT'];

autoroutes(app, {
  dir: '../routes'
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});