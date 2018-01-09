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
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import { stateInfo } from '../components/stateInfo'
import * as color from '../components/color';
import * as font from '../components/font';

export default class State extends Component<{}> {
  _renderItems(state) {
    return (
      <View style={styles.cell}>
        <View style={styles.box_one}>
          <View style={styles.img_box}>
            <Image source={state.flag} style={{borderRadius: 3}}/>
          </View>
          <View style={styles.name_box}>
            <Text style={styles.name_txt}>{state.name}</Text>
          </View>
        </View>
        <View style={styles.box_two}>
          <View style={styles.city_box}>
            <Text style={styles.city_txt}>City:            {state.city}</Text>
          </View>
          <View style={styles.governor_box}>
            <Text style={styles.governor_txt}>Governor:    {state.governor}</Text>
          </View>
        </View>
      </View>
      )
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: color.blue_color}}>
        <FlatList data={stateInfo}
                  renderItem={({item}) => this._renderItems(item)}
        />
        <View style={{height: responsiveHeight(8)}}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  cell: {
    height: responsiveHeight(18),
    marginHorizontal: 10,
    marginVertical: 2.5,
    paddingLeft: 15,
    padding: 8,
    borderColor: color.white_color,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: color.white_color,
  },
  box_one: {
    flexDirection: 'row',
    flex: 1
  },
  box_two: {
    flex: 2
  },
  img_box: {
    flex: 1,
    borderRadius: 10,
    //backgroundColor: 'green',
  },
  name_box: {
    flex: 3,
    justifyContent: 'center',
    //backgroundColor: 'yellow'
  },
  name_txt: {
    fontFamily: font.time,
    fontSize: 20,
    color: color.black_color,
  },
  city_box: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
  },
  city_txt: {
    fontFamily: font.time,
    lineHeight: 20,
    color: color.black_color,
    fontSize: 17,
  },
  governor_box: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  governor_txt: {
    fontFamily: font.time,
    lineHeight: 20,
    color: color.black_color,
    fontSize: 17,
  }
})

