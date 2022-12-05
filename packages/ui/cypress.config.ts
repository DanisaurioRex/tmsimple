import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        video: false,
        devServer: {
            framework: 'angular',
            bundler: 'webpack',
        },
        specPattern: '**/*.cy.ts',
    },
});
