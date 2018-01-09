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
import {
  controlAudio,
  changeAudio
} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { Icon } from 'native-base';
import * as color from '../components/color';
import * as font from '../components/font';

class Audio extends Component<{}> {
  render() {
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
            <Text style={styles.card_txt}>At vero eos et accusamus et iusto odio dignissim ducimus qui blanditiis praesentium voluptatum?</Text>
          </View>
          <Text style={styles.dash_line}> . . . . . . . . . . </Text>
          <View style={styles.card_innerbox}>
             <Text style={styles.card_txt}>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis </Text>
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
          <View style={styles.repeat_box}>
            <View>
              <Icon name='md-repeat' style={{fontSize: 20, color: 'white'}}/>
            </View>
          </View>
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
    audioData: state.audioData

  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    controlAudio,
    changeAudio
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Audio);

