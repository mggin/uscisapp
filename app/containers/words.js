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
  SectionList,
  Image,
  TouchableHighlight,
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import {
  triggerSpeech
} from '../../actions'
import { Icon } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import * as color from '../components/color';
import * as font from '../components/font';
import * as words from '../components/wordsData';
import Tts from 'react-native-tts';

const dataSource = [
    {data: words.people, title: 'PEOPLE'},
    {data: words.civics, title: 'CIVICS'},
    {data: words.places, title: 'PLACES'},
    {data: words.months, title: 'MONTHS'},
    {data: words.holidays, title: 'HOLIDAYS'},
    {data: words.verbs, title: 'VERBS'},
    {data: words.otherFunction, title: 'OTHER (FUNCTION)'},
    {data: words.otherContent, title: 'OTHER (CONTENT)'},
]

class Words extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('words Mount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('words updated')
    return true
  }
  _triggerSpeech = (value) => {
    Tts.stop()
    Tts.speak(value)
  }

   _renderItem = (item) => {
      return (
        <View style={styles.item_box}>
          <Text style={styles.item_text}>{item}</Text>
          <TouchableOpacity onPress={() => this._triggerSpeech(item)} style={styles.speaker} activeOpacity={0.5}>
              <Image source={require('../../assets/icons/icons8-speaker-100.png')} style={styles.speaker}/>
          </TouchableOpacity>
        </View>
      )
   }
   _renderHeader = (section) => {
      return <Text style={styles.header}>{section.title}</Text>
   }
  render() {
  console.disableYellowBox = true;

    
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SectionList
          style={styles.section_style}
          sections={dataSource}
          stickySectionHeadersEnabled={false}
          renderItem={({item}) => this._renderItem(item)}
          renderSectionHeader={({section}) => <View style={styles.title_box}><Text style={styles.header}>{section.title}</Text></View>}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  section_style: {
    marginTop: 1,
    //marginBottom: 52,
  },
  speaker: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  item_box: {
    flexDirection: 'row',
    borderColor: color.bg,
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 0,
    backgroundColor: color.white,
  },
  item_text: {
    flex: 4,
    fontFamily: font.cabin_regular,
    fontSize: 16,
    color: color.text,
    paddingVertical: 15,
    paddingHorizontal: 10,

  },
  title_box: {
    backgroundColor: color.text,
    marginHorizontal: 0,
  },
  header: {
    fontFamily: font.cabin_bold,
    fontSize: 16,
    color: color.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }
})

function mapStateToProps(state) {
  return {
    wordsData: state.wordsData,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    triggerSpeech
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Words);

