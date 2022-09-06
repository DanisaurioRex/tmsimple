module.exports = {
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).ts?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    verbose: true,
};
