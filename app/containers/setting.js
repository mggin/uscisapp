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
  Image,
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
  setZomiLang,
  setBurmeseLang,
  increaseFontSize,
  decreaseFontSize,
} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { Icon } from 'native-base';
import * as color from '../components/color';
import * as font from '../components/font';

class Setting extends Component<{}> {
  constructor(props) {
    super(props);
    this.state={
      burmeseLang: false,
      zomiLang: true
    }
  }
  _onValueChange(value, name) {
    //this.props.setLang(value)
    //this.getData(value)
    //this.props.setCardData(value)
    if (name == 'burmese') {
      if (!value) {
        this.setState({
          burmeseLang: false,
          zomiLang: true
        })
      } else {
        this.setState({
          burmeseLang: true,
          zomiLang: false
        })
      }
    } else if (name == 'zomi') {
      if (!value) {
        this.setState({
          burmeseLang: true,
          zomiLang: false,
        })
      } else {
        this.setState({
          burmeseLang: false,
          zomiLang: true
        })
      }
    } else {
      //console.log('log nothing')
    }

  }
  _onV
  render() {
  console.disableYellowBox = true;
  console.log('setting.js')
  return (
      <View style={{flex: 1, backgroundColor: color.bg}}>
      {/*}
        <Picker selectedValue={this.props.settingData.lang}
                itemStyle={{fontSize: 16, fontFamily: 'Verdana', color: 'black', fontWeight: 'bold'}}
                onValueChange={(itemValue) => this._onValueChange(itemValue)}>
                <Picker.Item label="ZOMI" value="ZOMI" />
                <Picker.Item label="BURMESE" value="BURMESE" />
        </Picker*/}
        <View style={styles.itembox}>
          <Text style={styles.itemtxt}>Burmese</Text>
          <View style={styles.switch_box}>
            <Switch style={styles.switch_style}
                    onValueChange={(value) => this._onValueChange(value,'burmese')}
                    value={this.state.burmeseLang}/>
          </View>
        </View>
        <View style={styles.itembox}>
          <Text style={styles.itemtxt}>Zomi</Text>
          <View style={styles.switch_box}>
            <Switch style={styles.switch_style}
                    onValueChange={(value) => this._onValueChange(value,'zomi')}
                    value={this.state.zomiLang}/>
          </View>
        </View>
         <View style={styles.itembox}>
          <Text style={[styles.itemtxt, {padding: 40}]}>Font Size</Text>
          <View style={styles.font_box}>
            <View style={{paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.decreaseFontSize()}>
                <Image source={require('../../assets/icons/icons8-minus-100.png')} style={styles.font_icon}/>
              </TouchableOpacity>
              <Text style={styles.font_sty}>{this.props.settingData.fontSize}</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.increaseFontSize()}>
                <Image source={require('../../assets/icons/icons8-plus-100.png')} style={styles.font_icon}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  itembox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    marginTop: 0.8,
  },
  itemtxt: {
    flex: 4,
    fontFamily: font.cabin_regular,
    color: color.black_color,
    fontSize: 16,
    paddingLeft: 10,
  },
  switch_box: {
    flex: 1,
    padding: 10,
  },
  font_box: {
    flexDirection: 'row',
    marginRight: 20,
    borderColor: color.text,
    borderWidth: 0.5,
    borderRadius: 3
   // backgroundColor: '#000000'
  },
  font_icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  switch_style: {
    padding: 10,

  },
  font_sty: {
    fontFamily: font.righteous,
    color: color.text,
    margin: 10,
    width: 60,
    textAlign: 'center',
  }
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
    setZomiLang,
    setBurmeseLang,
    increaseFontSize,
    decreaseFontSize,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Setting);

