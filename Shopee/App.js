/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import Route from './app/Route';
import store from './app/redux/store'

const App = () => {
  return (
    <Provider store = {store}>
     <Route/>
    </Provider>
  );
};

export default App;
