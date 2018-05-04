/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import RNFS from 'react-native-fs'
import React, { Component } from 'react';
import {
          StyleSheet,
          View,
          AsyncStorage,
          Alert
       } from 'react-native';
import {  Router,
          Scene,
          Actions,

        } from 'react-native-router-flux'
import Main from './containers/main'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCardData, setCardData, getAllTestData, getFontInfo, getScore, layoutChanged, initFont} from '../actions'
//import About from './components/about'
import Study from './containers/study'

class Route extends Component {

  componentWillMount() {
    this.props.layoutChanged()
    this.props.initFont()
    this._getFontInfo()
  }

  _getFontInfo() {
    //Alert.alert('hello')
    AsyncStorage.multiGet(['@fontSize', '@lang', '@score'])
      .then((fontInfo) => {
        //console.log(fontInfo[0][1])
        // console.log(fontInfo)
        // console.log(fontInfo[0][1])
        // Alert.alert(fontInfo[0][1])
        //Alert.alert(fontInfo)
        //this.props.getScore(fontInfo[2][1])
         this.props.getFontInfo(fontInfo[0][1], fontInfo[1][1])
         if (fontInfo[1][1] == 'BURMESE') {
            //this.props.setBurmeseLang(value)
            this.props.setCardData('BURMESE')
          } else if (fontInfo[1][1] == 'ZOMI') {
            //this.props.setZomiLang(value)
            this.props.setCardData('ZOMI')
          } else {
            //consol
          }
      })
      AsyncStorage.getItem('@score', (err, result) => {
            //Alert.alert(result+ 'here')
            this.props.getScore(result)
      })
  }
   componentDidMount() {
    this.props.getCardData()
    this.props.getAllTestData()
   }
  render() {
    //console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        <Main />
      </View>
    )
  }
}
function mapStateToProps(state) {
  return {
    studyData: state.studyData,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardData,
    setCardData,
    getAllTestData,
    getFontInfo,
    getScore,
    layoutChanged,
    initFont
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Route);
