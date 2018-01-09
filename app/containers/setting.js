/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Switch,
  Picker,
  TouchableOpacity
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import {
  setLang,
  setCardData,
} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { Icon } from 'native-base';
import * as color from '../components/color';
import * as font from '../components/font';

class Setting extends Component<{}> {

  _onValueChange(value) {
    this.props.setLang(value)
    //this.getData(value)
    this.props.setCardData(value)
  }
  render() {
  console.disableYellowBox = true;
  return (
      <View style={{flex: 1, backgroundColor: "#4a86e8ff"}}>
        <Picker selectedValue={this.props.settingData.lang}
                itemStyle={{fontSize: 16, fontFamily: 'Verdana', color: 'black', fontWeight: 'bold'}}
                onValueChange={(itemValue) => this._onValueChange(itemValue)}>
                <Picker.Item label="ZOMI" value="ZOMI" />
                <Picker.Item label="BURMESE" value="BURMESE" />
        </Picker>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  
})

function mapStateToProps(state) {
  return {
    settingData: state.settingData
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setLang,
    setCardData,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Setting);

