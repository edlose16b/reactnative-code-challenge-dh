module.exports = {
  globals: {__DEV__: true},
  watchPathIgnorePatterns: ['/__tests__/modules/products/core'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '/detox',
    '@react-native',
    '<rootDir>/__tests__/modules/products/core/',
  ],
};
