module.exports = {
  setupTestFrameworkScriptFile: 'jest-enzyme',
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/package-lock.json',
    '<rootDir>/jest.config.js',
    '<rootDir>/coverage/',
    '<rootDir>/webpack.config.js',
    '<rootDir>/database/data_generation',
    '<rootDir>/keys/',
  ],
};
