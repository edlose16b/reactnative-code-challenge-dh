module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  globals: {__DEV__: true},
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '/detox',
    '@react-native',
    '<rootDir>/__tests__/modules/products/core/',
    '<rootDir>/__tests__/setup',
  ],
  setupFiles: ['<rootDir>/__tests__/setup.ts'],
};
