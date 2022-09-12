import { defineConfig } from 'cypress';
import { configurePlugin } from 'cypress-mongodb';

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        video: false,
        setupNodeEvents(on, config) {
            configurePlugin(on);
        },
    },
    env: {
        mongodb: {
            uri: 'mongodb://localhost:27017',
            database: 'test',
        },
    },
});
