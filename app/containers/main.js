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
  Image,
  ScrollView,
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import * as color from '../components/color';
import * as font from '../components/font';
import Study from './study';
import Audio from './audio';
import Test from './test';
import State from './state';
import Setting from './setting';

export default class Main extends Component<{}> {
  render() {
  console.disableYellowBox = true;
    const studyIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-paper-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>Study</Text>
      </View> )
    const audioIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-headphones-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>Audio</Text>
      </View> )
    const testIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-choice-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>Test</Text>
      </View> )
    const stateIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-museum-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>States</Text>
      </View> )
    const bookIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-pdf-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>Book</Text>
      </View> )
    const videoIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-video-playlist-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>Video</Text>
      </View> )
    const infoIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-more-details-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>More Info</Text>
      </View> )
    const settingIcon = (
      <View style={styles.icon_box}>
        <Image source={require('../../assets/icons/icons8-settings-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_text}>Setting</Text>
      </View> )
    return (
      <Container>
        <Header hasTabs
                style={{backgroundColor: "#4a86e8ff"}}/>
        <Tabs renderTabBar={()=> <ScrollableTab />} 
              tabBarPosition='overlayBottom'
              tabBarUnderlineStyle={styles.tabBar_style}
              locked={true}>
          <Tab heading={studyIcon}>
            <Study />
          </Tab>
          <Tab heading={audioIcon}>
            <Audio />
          </Tab>
          <Tab heading={testIcon}>
            <Test />
          </Tab>
          <Tab heading={stateIcon}>
            <State />
          </Tab>
          {/*
          <Tab heading={bookIcon}>
            <View/>
          </Tab>
          */}
          <Tab heading={infoIcon}>
            <View/>
          </Tab>
          <Tab heading={settingIcon}>
            <Setting />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  content_view: {
    height: responsiveHeight(90),
    //backgroundColor: 'green'
  },
  menu_view: {
    height: responsiveHeight(10),
  },
   icon_box: {
    flexDirection: 'column',
    //backgroundColor: 'black'
  },
  tabBar_style: {
    backgroundColor: color.blue_color,
    marginBottom: 0,
  },
  image_size: {
    width: 30,
    height: 30,
  },
  icon_text: {
    fontFamily: font.righteous,
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 4,
  }
})
