import { injectable } from 'inversify';
import { DataSource } from 'typeorm';
import { TestCase } from '../../entities/test-case.entity';

const datasource = new DataSource({
    host: process.env['DB_HOST'] ?? 'localhost',
    type: 'mongodb',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: [TestCase],
    migrations: [],
    subscribers: [],
    useUnifiedTopology: true,
});

@injectable()
export class AppDataSource {
    public async save<Entity>(entity: Entity): Promise<Entity> {
        return datasource.manager.save<Entity>(entity);
    }

    public async initialize(): Promise<void> {
        try {
            await datasource.initialize();
            console.log('Data Source has been initialized!');
        } catch (error) {
            console.error('Error during Data Source initialization:', error);
        }
    }
}
