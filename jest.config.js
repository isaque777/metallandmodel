/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  
  // Where to find tests
  roots: ['<rootDir>/src'],
  
  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  
  // Module handling
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Optional: for path aliases
  },
  
  // TypeScript support
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        // ts-jest configuration (optional)
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  
  // Coverage settings
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'clover'],
  coverageThreshold: { // Optional: enforce coverage minimums
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  
  // Clear mocks between tests
  clearMocks: true,
};