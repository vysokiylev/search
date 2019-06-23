import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import store from './store';
import Root from './components/pages';

render(
  <Provider store={store}>
    <HashRouter>
      <Route component={Root} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
