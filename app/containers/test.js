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
  getTestData,
  checkAnswer,
  resetResult
} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import Swiper from 'react-native-swiper'
import * as color from '../components/color';
import * as font from '../components/font';

class Test extends Component<{}> {
  componentDidMount() {
    this.props.getTestData()
  }
  render() {
  console.disableYellowBox = true;
    
    return (
      <View style={styles.main}>
      <Swiper style={styles.swiper_box}
                  onIndexChanged={(index) => this.props.resetResult()}
                  //ref='swiper'
                  showsPagination={false}
                  loop={false}>

          {
            this.props.testData.testItems.map((data) => 
              <View style={styles.main}>
                <View style={styles.ques_box}>
                  <View style={styles.count_box}>
                    <Text style={styles.count_txt}>1/20</Text>
                  </View>
                  <Text style={styles.ques_txt}>{data.ques}</Text>
                </View>
                <View style={styles.ans_box}>
                  <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer()}>
                    <Text style={styles.choice_txt, {color: this.props.testData.showResult && data.ans0.correct && true? 'yellow' : 'white'}}>{data.ans0.answer}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer()}>
                    <Text style={styles.choice_txt, {color: this.props.testData.showResult && data.ans1.correct && true ? 'yellow' : 'white'}}>{data.ans1.answer}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer()}>
                    <Text style={styles.choice_txt, {color: this.props.testData.showResult && data.ans2.correct && true ? 'yellow' : 'white'}}>{data.ans2.answer}</Text>
                  </TouchableOpacity>       
                  <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer()}>
                    <Text style={styles.choice_txt, {color: this.props.testData.showResult && data.ans3.correct && true ? 'yellow' : 'white'}}>{data.ans3.answer}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }
          </Swiper>
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
  }
})

function mapStateToProps(state) {
  return {
    testData: state.testData,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getTestData,
    checkAnswer,
    resetResult,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Test);

