// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/MyDbFinalProject'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/MyDbFinalProject/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/MyDbFinalProject/test-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(parse5|@testing-library)/)'
  ],
  collectCoverageFrom: ['MyDbFinalProject/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // This should match your test files
};
