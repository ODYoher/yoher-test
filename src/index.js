import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import HomeLayout from './presentation/layout/home';
import { Provider } from 'react-redux';
import store from './application/store';


ReactDOM.render(
  <Provider store={store}>
    <HomeLayout />
  </Provider>,
  document.getElementById('root')
);


