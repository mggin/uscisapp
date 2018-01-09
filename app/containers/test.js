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
  TouchableOpacity
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import * as color from '../components/color';
import * as font from '../components/font';

export default class Test extends Component<{}> {
  render() {
  console.disableYellowBox = true;
    
    return (
      <View style={styles.main}>
        <View style={styles.ques_box}>
          <View style={styles.count_box}>
            <Text style={styles.count_txt}>1/20</Text>
          </View>
          <Text style={styles.ques_txt}>At vero eos et accusamus et iusto odio dignissim ducimus qui blanditiis praesentium voluptatum?</Text>
        </View>
        <View style={styles.ans_box}>
          <TouchableOpacity style={styles.choice_box}>
            <Text style={styles.choice_txt}>Et harum quidem rerum facilis est</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice_box}>
            <Text style={styles.choice_txt}>Et harum quidem rerum facilis est</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choice_box}>
            <Text style={styles.choice_txt}>Et harum quidem rerum facilis est</Text>
          </TouchableOpacity>       
          <TouchableOpacity style={styles.choice_box}>
            <Text style={styles.choice_txt}>Et harum quidem rerum facilis est</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: responsiveHeight(15)}}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#4a86e8ff'
  },
  ques_box: {
    marginHorizontal: 30,
  },
  count_box: {
    width: responsiveWidth(15),
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    padding: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count_txt: {
    color: 'white',
  },
  ques_txt: {
    color: 'white',
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: 'Times New Roman'
  },
  ans_box: {
    marginHorizontal: 40,
  },
  choice_box: {
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
  },
  choice_txt: {
    fontFamily: 'Times New Roman',
    color: 'white',
  }
})

