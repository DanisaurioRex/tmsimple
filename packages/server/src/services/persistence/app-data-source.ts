import { injectable } from 'inversify';
import { DataSource } from "typeorm";
import { TestCase } from "../../entity/test-case.entity";

const datasource = new DataSource({
    type: "mongodb",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [
        TestCase
    ],
    migrations: [],
    subscribers: [],
    useUnifiedTopology: true
})

@injectable()
export class AppDataSource {

    public get DataSource() {
        return datasource;
    }

    public get Manager() {
        return datasource.manager;
    }

    public async initialize(): Promise<void> {
        try {
            await datasource.initialize()
            console.log("Data Source has been initialized!")
        } catch (error) {
            console.error("Error during Data Source initialization:", error)
        }
    }
}
