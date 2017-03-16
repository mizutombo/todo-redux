import React from 'react';
import { render } from 'react-dom';
import { ListBuilder } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let reduxStore = createStore(todoApp);

render(
  <ListBuilder reduxStore={reduxStore}>
    <App />
  </ListBuilder>,
  document.getElementById('root')
);
