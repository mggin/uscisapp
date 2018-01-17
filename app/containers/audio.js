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
  AppState
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import {
  controlAudio,
  changeAudio,
  loopControl,
  autoControl
} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { Icon } from 'native-base';
import * as color from '../components/color';
import * as font from '../components/font';

class Audio extends Component<{}> {

  _handleAutoControl() {
    console.log('handling')
    this.props.autoControl()
  }
  componentDidMount() {
    this._interval = setInterval(() => this._handleAutoControl(), 5000);
  }

  render() {
  console.log(this.props.studyData.engData)
  console.disableYellowBox = true;

    
    return (
      <View style={{flex: 1, backgroundColor: "#4a86e8ff"}}>
        <View style={styles.num_box}>
          <View style={styles.num_style}>
            <Text style={styles.num_text}>{this.props.audioData.index + 1}/100</Text>
          </View>
        </View>
        <View style={styles.txt_box}>
          <View style={styles.card_innerbox}>
            <Text style={styles.card_txt}>{this.props.studyData.engData[this.props.audioData.index - 1].quesEng}</Text>
          </View>
          <Text style={styles.dash_line}> . . . . . . . . . . </Text>
          <View style={styles.card_innerbox}>
             <Text style={styles.card_txt}>{this.props.studyData.engData[this.props.audioData.index - 1].ansEng}</Text>
          </View>
        </View>
        <View style={styles.control_box}>
          <View style={styles.auto_box}>
            <Text style={{fontFamily: 'Righteous-Regular', color: 'white'}}>AUTO</Text>
          </View>
          <View style={styles.btn_box}>
            <TouchableOpacity style={styles.skip_backward} onPress={() => this.props.changeAudio('PREV')}>
              <Icon name='md-skip-backward' style={{fontSize: 20, color: 'white'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.play_box} onPress={() => this.props.controlAudio()}>
              { this.props.audioData.isPlaying ? <Icon name='md-pause' style={{fontSize: 30, color: 'white'}}/> :  <Icon name='md-play' style={{fontSize: 30, color: 'white'}}/> }
            </TouchableOpacity>
            <TouchableOpacity style={styles.skip_forward} onPress={() => this.props.changeAudio('NEXT')}>
              <Icon name='md-skip-forward' style={{fontSize: 20, color: 'white'}}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.repeat_box} onPress={() => this.props.loopControl()}>
            <View>
              {this.props.audioData.loop ? <Icon name='ios-repeat' style={{fontSize: 20, color: 'white'}}/> : <Icon name='ios-repeat-outline' style={{fontSize: 20, color: 'white'}}/> } 
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height: responsiveHeight(15)}}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  txt_box: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  control_box: {
    height: responsiveHeight(7),
    flexDirection: 'row',
  },
  auto_box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_box: {
    flex: 3,
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    borderColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  repeat_box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play_box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip_forward: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  skip_backward: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  card_innerbox: {
    margin: 3,
  },
  card_txt: {
    fontSize: 18,
    fontFamily: 'Righteous-Regular',
    lineHeight: 20,
    color: 'white',
  },
  dash_line: {
    alignSelf: 'center',
    color: 'white',
  },
})

function mapStateToProps(state) {
  return {
    audioData: state.audioData,
    studyData: state.studyData

  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    controlAudio,
    changeAudio,
    loopControl,
    autoControl
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Audio);

