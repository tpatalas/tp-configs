/**
 * More Info:
 *
 * https://nextjs.org/docs/testing#quickstart-2
 * https://github.com/vercel/next.js/blob/canary/examples/with-jest/jest.config.js
 */

// jest.config.js
// const nextJest = require('next/jest');
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig: import('jest').Config = {
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest' },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/_components/(.*)$': ['<rootDir>/app/_components/$1'],
    '^@/_lib/(.*)$': ['<rootDir>/app/_lib/$1'],
    '^@/(.*)$': ['<rootDir>/app/$1'],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
