import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devTools from 'remote-redux-devtools';
import rootReducer from './src/reducers';
import Routes from './src/Routes';

const store = createStore(rootReducer, devTools());

export default function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}
