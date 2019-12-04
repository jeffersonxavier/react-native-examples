import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import Routes from './src/Routes';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}
