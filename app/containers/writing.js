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

class Writing extends Component<{}> {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('writing updated')
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
      <View style={{flex: 1, backgroundColor: color.bg}}>
        <FlatList
          style={styles.section_style}
          data={words.writingContent} 
          renderItem={({item}) => this._renderItem(item)}
        />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  section_style: {
    marginTop: 1,
    marginBottom: 52,
  },
  speaker: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  item_box: {
    flexDirection: 'row',
    borderColor: 'rgba(52, 152, 219, 0.5)',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 0,
    backgroundColor: color.white,
  },
  item_text: {
    flex: 4,
    fontFamily: font.cabin_regular,
    fontSize: 16,
    color: color.text,
    paddingVertical: 20,
    paddingHorizontal: 10,
    lineHeight: 22,

  },
})

function mapStateToProps(state) {
  return {
    wordsData: state.wordsData,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Writing);

