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
  TouchableHighlight,
  Image,
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
  submit,
  changeBtn,
} from '../../actions'
import { connect } from 'react-redux'
import { Icon } from 'native-base';
import { bindActionCreators } from 'redux' 
import PercentageCircle from 'react-native-percentage-circle';
import Swiper from 'react-native-swiper'
import * as color from '../components/color';
import * as font from '../components/font';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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
    if (this.state.count == 18) {
       this.props.changeBtn()
       console.log('in')
    } else if (this.state.count == 19) {
      this.props.submit()
    }
    
  }
  _showResultElement(correct) {
    if (this.props.testData.showResult) {
      if (correct) {
        return <Image source={require('../../assets/icons/icons8-checked-100.png')} style={styles.check_sty}/>
      } else {
        return <Image source={require('../../assets/icons/icons8-cancel-100.png')} style={styles.check_sty}/>
      }
    } else {
      return <View style={styles.check_sty}/>
    }
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
          <View style={{flex: 1, backgroundColor: 'rgba(41, 128, 185,0.3)', alignItems: 'center'}}>
              <View style={styles.score_box}>
                 <Text style={styles.score_txt}>YOUR SCORE</Text>
              </View>
              <AnimatedCircularProgress
                    size={200}
                    width={15}
                    style={{alignSelf: 'center'}}
                    fill={this.props.testData.percentage}
                    tintColor={this.props.testData.isSuccess ? color.green: color.red}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor={color.grey}>
                    {
                      (fill) => (
                        <Text style={{fontFamily: font.righteous, fontSize: 40, color: color.text}}>
                          {this.props.testData.percentage}%
                        </Text>
                      )
                    }
            </AnimatedCircularProgress>
            <TouchableOpacity onPress={() => this._udpateScreen()} style={styles.beginBtn}>
              <Text style={{fontFamily: font.cabin_bold, fontSize: 20, color: color.white}}>BEGIN TEST</Text>
            </TouchableOpacity>
    
          </View> :
          <View style={{flex: 1, backgroundColor: color.bg}}>
            <Swiper style={styles.swiper_box}
                        onTouchStart={() => this.props.resetResult()}
                        onIndexChanged={(index) => this.props.indexChanged(index)}
                        ref='swiper'
                        //removeClippedSubviews={false}
                        //autoplayTimeout={1}
                        scrollEnabled={false}
                        showsPagination={false}
                        loop={false}>

                {
                  this.props.testData.testItems.map((data, index) => 
                    <View style={styles.main} key={index} pointerEvents={true ? 'auto' : 'none'}>
                      <View style={styles.ques_box}>
                        <Text style={styles.count_txt}>{index+1}/20</Text>
                        <Text style={styles.ques_txt}>{data.ques}</Text>
                      </View>
                      <View style={styles.ans_box}>
                        <TouchableOpacity style={styles.outter_choice_box} onPress={() => this.props.checkAnswer(data.ans0.correct)} activeOpacity={0.7}>
                          {
                            this._showResultElement(data.ans0.correct)
                          }
                          <View style={styles.choice_box}>
                            <Text style={{fontFamily: font.cabin_regular, fontSize: 14, color: this.props.testData.showResult && data.ans0.correct && true? 'yellow' : 'white'}}>{data.ans0.answer}</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outter_choice_box} onPress={() => this.props.checkAnswer(data.ans1.correct)} activeOpacity={0.7}>
                          {
                            this._showResultElement(data.ans1.correct)
                          }
                          <View style={styles.choice_box}>
                            <Text style={{fontFamily: font.cabin_regular, fontSize: 14, color: this.props.testData.showResult && data.ans1.correct && true? 'yellow' : 'white'}}>{data.ans1.answer}</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outter_choice_box} onPress={() => this.props.checkAnswer(data.ans2.correct)} activeOpacity={0.7}>
                          {
                            this._showResultElement(data.ans2.correct)
                          }
                          <View style={styles.choice_box}>
                            <Text style={{fontFamily: font.cabin_regular, fontSize: 14, color: this.props.testData.showResult && data.ans2.correct && true? 'yellow' : 'white'}}>{data.ans2.answer}</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outter_choice_box} onPress={() => this.props.checkAnswer(data.ans3.correct)} activeOpacity={0.7}>
                          {
                            this._showResultElement(data.ans3.correct)
                          }
                          <View style={styles.choice_box}>
                            <Text style={{fontFamily: font.cabin_regular, fontSize: 14, color: this.props.testData.showResult && data.ans3.correct && true? 'yellow' : 'white'}}>{data.ans3.answer}</Text>
                          </View>
                        </TouchableOpacity>
                        
                      </View>
                    </View>
                  )
                }

                </Swiper>
                <View style={styles.next_box}>
                { this.props.testData.nextBtn ?
                  <TouchableOpacity style={{backgroundColor: color.text, borderRadius: 50, paddingHorizontal: 25, paddingVertical: 3}}
                                    activeOpacity={0.7}
                                    onPress={() => this._nextFunc()}>
                    {this.props.testData.isSubmit ? 
                    <Text style={styles.next_text}>VIEW RESULT</Text> :
                    <Icon name='md-arrow-forward' style={{fontSize: 30, color: 'white'}}/>
                  }
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
    height: responsiveHeight(85)
  },
  main: {
    flex: 1,
    marginHorizontal: 15,
  },
  ques_box: {
    flexShrink: 0.5,
    marginTop: 20,
    marginBottom: 20,
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
    marginLeft: 30,
  },
  ques_txt: {
    color: color.white,
    lineHeight: 22,
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 30,
    fontFamily: font.cabin_semibold,
  },
  ans_text: {
    fontFamily: font.cabin_regular,
    fontSize: 19, 
    fontWeight: '900',
  },
  choice_box: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: color.text,
    paddingHorizontal: 15,
    paddingVertical: 15,
    //marginLeft: 7,
  },
  outter_choice_box: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 1

  },
  next_box: {
    height: responsiveHeight(15),
    marginBottom: 51,
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  next_text: {
    fontFamily: font.cabin_semibold,
    color: color.white,
    fontSize: 16,
    paddingVertical: 5,
    backgroundColor: '#000000'
  },
  beginBtn: {
    alignSelf: 'center',
    borderColor: color.bg,
    backgroundColor: color.text,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    marginTop: 50,
  },
  score_txt: {
    fontFamily: font.cabin_bold,
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 20,
    color: color.white,
    //backgroundColor: '#000000',
    //marginBottom: 40,
  },
  score_box: {
    backgroundColor: color.text,
    opacity: 1,
    width: responsiveWidth(100),
    marginBottom: 50,
    //borderRadius: 5,
  },
  check_sty: {
    width: 25,
    height: 25,
    marginRight: 5,
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
    hideScore,
    submit,
    changeBtn
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Test);

