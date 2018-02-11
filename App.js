import React, { Component } from 'react';
import Realm from 'realm'
import RNFS from 'react-native-fs'
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
  const sourcePath1 = RNFS.MainBundlePath + '/' + 'uscis.realm';
  const destinPath1 = RNFS.LibraryDirectoryPath + '/' + 'uscis.realm';
  const sourcePath2 = RNFS.MainBundlePath + '/' + 'uscis_test.realm';
  const destinPath2 = RNFS.LibraryDirectoryPath + '/' + 'uscis_test.realm';
  RNFS.copyFile(sourcePath1, destinPath1)
  RNFS.copyFile(sourcePath2, destinPath2)
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}
