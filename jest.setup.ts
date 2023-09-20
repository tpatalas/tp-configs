// NOTE: If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
// sed for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Next Auth
// jest.mock('next-auth', () => ({
//   getServerSession: jest.fn().mockReturnValue(Promise.resolve(true)),
// }));
//
// jest.mock('@/api/auth/[...nextauth]/authOptions', () => ({
//   authOptions: {},
// }));

// Next.js router mock
jest.mock('next/router', () => require('next-router-mock'));
