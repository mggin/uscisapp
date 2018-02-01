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
  TouchableHighlight
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import {
  getTestData,
  checkAnswer,
  resetResult,
  indexChanged,
  hideScore,
} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import Swiper from 'react-native-swiper'
import * as color from '../components/color';
import * as font from '../components/font';

class Test extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    this.props.getTestData()
  }
  _nextFunc() {
    this.state.count++
    range = this.state.count - this.props.testData.currentIndex
    this.refs.swiper.scrollBy(range, false)
    
  }
  _udpateScreen() {
    this.props.getTestData()
    this.setState({count: 0})
    this.props.hideScore()
  }
  render() {
  console.disableYellowBox = true;
    
    return (
        <View style={{flex: 1}}>
        { this.props.testData.showScore ?
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <TouchableOpacity onPress={() => this._udpateScreen()}>
              <Text>Stop</Text>
            </TouchableOpacity>
          </View> :
          <View style={{flex: 1, backgroundColor: color.bg}}>
            <Swiper style={styles.swiper_box}
                        onTouchStart={() => this.props.resetResult()}
                        onIndexChanged={(index) => this.props.indexChanged(index)}
                        ref='swiper'
                        autoplayTimeout={1}
                        scrollEnabled={false}
                        showsPagination={false}
                        loop={false}>

                {
                  this.props.testData.testItems.map((data, index) => 
                    <View style={styles.main}>
                      <View style={styles.ques_box}>
                        <Text style={styles.count_txt}>{index+1}/20</Text>
                        <Text style={styles.ques_txt}>{data.ques}</Text>
                      </View>
                      <View style={styles.ans_box}>
                        <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer(data.ans0.correct)}>
                          <Text style={{ fontFamily: font.cabin_semibold, fontSize: 16, color: this.props.testData.showResult && data.ans0.correct && true? 'yellow' : 'white'}}>{data.ans0.answer}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer(data.ans1.correct)}>
                          <Text style={{fontFamily: font.cabin_semibold, fontSize: 16, color: this.props.testData.showResult && data.ans1.correct && true ? 'yellow' : 'white'}}>{data.ans1.answer}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer(data.ans2.correct)}>
                          <Text style={{fontFamily: font.cabin_semibold, fontSize: 16, color: this.props.testData.showResult && data.ans2.correct && true ? 'yellow' : 'white'}}>{data.ans2.answer}</Text>
                        </TouchableOpacity>       
                        <TouchableOpacity style={styles.choice_box} onPress={() => this.props.checkAnswer(data.ans3.correct)}>
                          <Text style={{fontFamily: font.cabin_semibold, fontSize: 16, color: this.props.testData.showResult && data.ans3.correct && true ? 'yellow' : 'white'}}>{data.ans3.answer}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }
                </Swiper>
                <View style={styles.next_box}>
                { this.props.testData.nextBtn ?
                  <TouchableOpacity style={{backgroundColor: color.text, borderRadius: 30, paddingHorizontal: 10, paddingVertical: 5}}
                                    activeOpacity={0.6}
                                    onPress={() => this._nextFunc()}>
                    <Text style={styles.next_text}>NEXT</Text>
                  </TouchableOpacity> :
                  null
                }
                </View>
              </View>
            }
          </View>
    );
  }
}

const styles=StyleSheet.create({
  swiper_box: {
    height: responsiveHeight(90)
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  ques_box: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
  },
  count_txt: {
    color: color.white,
    fontFamily: font.cabin_semibold,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: responsiveWidth(22),
    borderWidth: 1.5,
    borderColor: color.white,
    textAlign: 'center',
    marginVertical: 5,
    marginLeft: 7,
  },
  ques_txt: {
    color: color.white,
    lineHeight: 22,
    fontSize: 18,
    marginTop: 10,
    marginHorizontal: 7,
    fontFamily: font.cabin_bold,
  },
  ans_box: {
    flex: 6,
  },
  choice_box: {
    borderRadius: 5,
    backgroundColor: color.text,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontFamily: font.cabin_semibold,
    margin: 7,
  },
  next_box: {
    height: responsiveHeight(15),
    marginBottom: 51,
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  next_text: {
    fontFamily: font.righteous,
    color: color.white,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    indexChanged,
    hideScore
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Test);

