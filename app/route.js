/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import RNFS from 'react-native-fs'
import React, { Component } from 'react';
import {
          StyleSheet,
       } from 'react-native';
import {  Router,
          Scene,
          Actions,
        } from 'react-native-router-flux'
import Main from './containers/main'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCardData, setCardData, getAllTestData } from '../actions'
//import About from './components/about'

class Route extends Component {

  
  render() {
    console.disableYellowBox = true;
    const sourcePath2 = RNFS.MainBundlePath + '/' + 'uscis_test.realm';
    const destinPath2 = RNFS.LibraryDirectoryPath + '/' + 'uscis_test.realm';
    RNFS.copyFile(sourcePath2, destinPath2)
    this.props.getCardData()
    this.props.setCardData()
    this.props.getAllTestData()
    return (
      <Router>
        <Scene key='root' 
               hideNavBar={true}>
          <Scene key='menu'
                 initial={true}
                 component={Main}/>
        </Scene>
      </Router>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardData,
    setCardData,
    getAllTestData,
  }, dispatch);
}
export default connect(null, matchDispatchToProps)(Route);
