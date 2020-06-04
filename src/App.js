import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import './assets/css/base.css';
import './assets/css/colors.css';

import Routes from'./routes/routes';

const App = () => (
  <Provider store = {store}>
      <Routes></Routes>
  </Provider>
);

export default App;
