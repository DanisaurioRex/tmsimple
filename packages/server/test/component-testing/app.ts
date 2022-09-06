import { InversifyExpressServer } from "inversify-express-utils";
import container from "../../src/inversify.config";
import * as bodyParser from "body-parser";
import "reflect-metadata";

const app = new InversifyExpressServer(container);
app.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});

export default app;
