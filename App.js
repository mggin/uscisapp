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
import Study from './app/containers/study'
import thunk from 'redux-thunk';


const store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends Component {
    
  render() {
    const sourcePath1 = RNFS.MainBundlePath + '/uscis.realm';
    const destinPath1 = RNFS.DocumentDirectoryPath + '/uscis.realm';
    const sourcePath2 = RNFS.MainBundlePath + '/uscis_test.realm';
    const destinPath2 = RNFS.DocumentDirectoryPath + '/uscis_test.realm';
    //const sourcePath3 = RNFS.MainBundlePath + '/track_99.mp3';
    //const destinPath3 = RNFS.LibraryDirectoryPath + '/track_99.mp3';
    RNFS.readDir(RNFS.MainBundlePath)
    RNFS.readDir(RNFS.DocumentDirectoryPath).then(result => {
      console.log(result)
    })
    RNFS.readDir(RNFS.MainBundlePath).then(result => {
      console.log(result)
    })
   //RNFS.moveFile(sourcePath1, destinPath1)
  // RNFS.moveFile(sourcePath2, destinPath2)
   /*
    RNFS.exists(destinPath1).then((exists) => {
      if (exists) {
        console.log(exists)
        console.log(destinPath1)
        RNFS.copyFile(sourcePath1, destinPath1)
      }
    })
  */
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}
