/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import './i18n';
import React from 'react';

import {Provider} from 'react-redux';
import AppNavigator from './AppNavigator';
import FilterStateProvider from './features/home/contexts/FilterStateContext';
import createStore from './redux/store';
import 'react-native-gesture-handler';

const App = () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <FilterStateProvider>
        <AppNavigator />
      </FilterStateProvider>
    </Provider>
  );
};

export default App;
