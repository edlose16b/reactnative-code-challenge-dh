import {render} from '@testing-library/react-native';
import React from 'react';
import createStore, {AppStore} from '../src/redux/store';
import {Provider} from 'react-redux';

export function renderWithRedux(
  component: React.ReactNode,
  state?: AppStore | undefined,
) {
  const store = createStore(state);
  const queries = render(<Provider store={store}>{component}</Provider>);

  return {
    ...queries,
    store,
  };
}
