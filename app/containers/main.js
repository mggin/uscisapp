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
import Words from'./words';
import Writing from './writing';
import Setting from './setting';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTab } from '../../actions'
import Tts from 'react-native-tts';

class Main extends Component<{}> {
  componentDidMount() {
    Tts.addEventListener('tts-start', (event) => console.log("start", event));
Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
    }
  render() {
  console.log(this.props.mainData.settingTab)
  console.disableYellowBox = true;

    const studyIcon = (
      <View style={styles.icon_box}>
        { this.props.mainData.studyTab ?
          <View>
            <Image source={require('../../assets/icons/icons8-study-filled-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_filled}>STUDY</Text>
          </View> :
          <View>
            <Image source={require('../../assets/icons/icons8-study-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_outline}>STUDY</Text>
          </View>
        }
      </View> )
    const audioIcon = (
      <View style={styles.icon_box}>
        { this.props.mainData.audioTab ?
          <View>
            <Image source={require('../../assets/icons/icons8-headphones-filled-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_filled}>AUDIO</Text>
          </View> :
          <View>
            <Image source={require('../../assets/icons/icons8-headphones-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_outline}>AUDIO</Text>
          </View>
        }
      </View> )
    const testIcon = (
      <View style={styles.icon_box}>
      { this.props.mainData.testTab ?
        <View>
          <Image source={require('../../assets/icons/icons8-test-passed-filled-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_filled}>TEST</Text>
        </View> : 
        <View>
          <Image source={require('../../assets/icons/icons8-test-passed-100.png')} style={styles.image_size}/>
          <Text style={styles.icon_outline}>TEST</Text>
        </View>
      }
      </View> )
    const stateIcon = (
      <View style={styles.icon_box}>
        { this.props.mainData.stateTab ?
          <View>
            <Image source={require('../../assets/icons/icons8-embassy-filled-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_filled}>STATE</Text>
          </View> : 
          <View>
            <Image source={require('../../assets/icons/icons8-embassy-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_outline}>STATE</Text>
          </View>
        }
      </View> )
    const wordIcon = (
      <View style={styles.icon_box}>
       { this.props.mainData.wordTab ?
          <View>
            <Image source={require('../../assets/icons/icons8-brick-filled-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_filled}>WORDS</Text>
          </View> : 
          <View>
            <Image source={require('../../assets/icons/icons8-brick-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_outline}>WORDS</Text>
          </View>
        }
      </View> )
    const writeIcon = (
      <View style={styles.icon_box}>
        { this.props.mainData.writeTab ?
          <View>
            <Image source={require('../../assets/icons/icons8-hand-with-pen-filled-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_filled}>WRITING</Text>
          </View> : 
          <View>
            <Image source={require('../../assets/icons/icons8-hand-with-pen-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_outline}>WRITING</Text>
          </View>
        }
      </View> )
    const settingIcon = (
      <View style={styles.icon_box}>
        { this.props.mainData.settingTab ?
          <View>
            <Image source={require('../../assets/icons/icons8-settings-filled-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_filled}>SETTING</Text>
          </View> : 
          <View>
            <Image source={require('../../assets/icons/icons8-settings-100.png')} style={styles.image_size}/>
            <Text style={styles.icon_outline}>SETTING</Text>
          </View>
        }
      </View> )
    return (
      <Container>
        <Header hasTabs
                style={{backgroundColor: "#4a86e8ff"}}/>
        <Tabs renderTabBar={()=> <ScrollableTab />} 
              tabBarPosition='overlayBottom'
              onChangeTab={(index) => this.props.changeTab(index)}
              tabBarUnderlineStyle={styles.tabBar_style}
              locked={true}>
          <Tab heading={studyIcon}>
            <Test />
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
          <Tab heading={wordIcon}>
            <Words />
          </Tab>
          <Tab heading={writeIcon}>
            <Writing />
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
    backgroundColor: color.white_color,
    marginBottom: 0,
  },
  image_size: {
    width: 30,
    height: 30,
  },
  icon_filled: {
    fontFamily: font.cabin_bold,
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
    color: color.icon_filled
  },
  icon_outline: {
    fontFamily: font.cabin_bold,
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
    color: color.icon_outline
  }
})

function mapStateToProps(state) {
  return {
    mainData: state.mainData,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    changeTab
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
