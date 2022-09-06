import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from '../../src/inversify.config';

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
