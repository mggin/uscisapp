/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
import { getCardData, setCardData } from '../actions'
//import About from './components/about'

class Route extends Component {

  
  render() {
    console.disableYellowBox = true;
    this.props.getCardData()
    this.props.setCardData()
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
    setCardData
  }, dispatch);
}
export default connect(null, matchDispatchToProps)(Route);
