import React, { Component } from 'react';
import {
          AppRegistry
        } from 'react-native';
import { 
          createStore,
          applyMiddleware
        } from 'redux';

import {
          Provider
       } from 'react-redux'
import allReducers from './reducers'
import Route from './app/route'


const store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}
