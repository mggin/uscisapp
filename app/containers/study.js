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
  Slider,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import { 
  responsiveHeight, 
  responsiveWidth, 
  responsiveFontSize 
} from 'react-native-responsive-dimensions';
import {
          updateCard,
          flipCard,
          updateIndex,
          getCardData,
          countIndex,
        } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { DeckSwiper, CardItem, Card } from 'native-base'
import Swiper from 'react-native-deck-swiper'
import * as color from '../components/color';
import * as font from '../components/font';
//import Slider from 'react-native-slider'
//import PageChild from './page'
import Carousel from 'react-native-snap-carousel';

class Study extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      cardCount: -1,
    }
  }
  _flipCard() {
    if (this.state.cardFront) {
      this.setState({cardFront: false})
      //this.state.cardFront = false
    } else {
      this.setState({cardFront: true})
    }
  }
   _updateCard() {
    this.setState({cardFront: true})
    //this.state.cardFront = true
  }

  _updateIndex(value) {
    this.setState({cardCount: value})
  }

  render() {
  console.disableYellowBox = true;
  console.log('study.js')
  //console.log(this.props.studyData.cardData[this.props.flashCard.index])
  //console.log('re run')
  //Piggy wake up early!!
  //Don't leave me on seen please again.:-)
  const fontSize = this.props.settingData.fontSize
  const lineHeight = this.props.settingData.fontSize + 10
  const marginHorizontal = this.props.layoutData.studyMarginHorizontal
  const marginLeft = this.props.layoutData.studyMarginHorizontal
    return (
      <View style={{flex: 1, backgroundColor: color.white}}> 
        <View style={{flex: 1, backgroundColor: color.bg}}>
          <View style={[styles.num_box, {marginLeft}]}>
            <View style={styles.num_style}>
              <Text style={styles.num_text}>{this.props.flashCard.count + 1}/100</Text>
            </View>
          </View>
          <View style={styles.card_box}>

              <Swiper
                 cards={this.props.studyData.cardData}
                 cardIndex={0}
                 verticalSwipe={false}
                 //showSecondCard={false}
                 horizontalThreshold={responsiveHeight(5)}

                 secondCardZoom={1}
                 zoomAnimationDuration={10}
                 cardHorizontalMargin={0}
                 cardVerticalMargin={0}
                 //animateCardOpacity={true}
                 infinite={true}
                 //childrenOnTop={true}
                 backgroundColor={'rgba(0,0,0,0)'}
                 goBackToPreviousCardOnSwipeLeft={true}
                 //animatedCardOpacity={false}
                 //outputRotationRange={["-2deg", "0deg", "2deg"]}
                 // cardStyle={{flex: }}
                 onSwiped={() => this.props.updateCard()}
                 onSwipedRight={(index) => this.props.countIndex(index, 'RIGHT')}
                 onSwipedLeft={(index) => this.props.countIndex(index, 'LEFT')}
                 //Shwe Htoo Infinity was driving me crazy !!!!!
                  renderCard={(data) => {
                    return (
                      <View style={[styles.card_style, {marginHorizontal}]}>
                   <TouchableOpacity style={{flex: 1}} key={data.id} activeOpacity={0.7} onPress={() => this.props.flipCard()}>
                    <View style={styles.card_innerbox}>
                      <Text style={[styles.card_txt, {fontSize, lineHeight}]}>{this.props.flashCard.front ? data.quesEng : data.quesLang}</Text>
                    </View>
                    <Text style={styles.dash_line}> . . . . . . . . </Text>
                    <ScrollView style={styles.card_innerbox}>
                       <Text style={[styles.card_txt, {fontSize, lineHeight}]}>{this.props.flashCard.front ? data.ansEng : data.ansLang}</Text>
                    </ScrollView>
                  </TouchableOpacity>
                  </View>

               )}      
              }>   
        </Swiper>
              
          </View>
          <View style={styles.slider_box}>
          {/*
            <Slider //thumbImage={require('../../assets/thumb.png')}
                    minimumTrackTintColor="white"
                    //maximumTrackTintColor=''
                    step={1}
                    maximumValue={99}
                    minimumValue={0}
                    horizontal={true}
                    value={this.state.index}
                    onValueChange={(value) => this._countIndex(value)}
                    onSlidingComplete={(value) => this._sliderFunc(value)}/>
          }
        */}
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  num_box: {
    flex: 1,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card_box: {
    flex: 6,
    marginHorizontal: 0,
  },
   slider_box: {
    flex: 2,
    marginVertical: 20,
    marginHorizontal: 15,
    //backgroundColor: 'white'

  },
  card_style: {
    height: responsiveHeight(55),
    borderRadius: 5,
    padding: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  num_style: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    //width: responsiveWidth(22),
    borderWidth: 1.5,
    borderColor: color.white,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  num_text: {
    fontFamily: font.righteous,
    fontSize: 15,
    color: 'white',
  }, 
  card_innerbox: {
    margin: 3,
  },
  card_txt: {
    fontFamily: font.cabin_regular,
    color: color.text,
  },
  dash_line: {
    alignSelf: 'center'
  },
})

function mapStateToProps(state) {
  return {
    studyData: state.studyData,
    flashCard: state.flashCard,
    settingData: state.settingData,
    layoutData: state.layoutData
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCard,
    flipCard,
    updateIndex,
    getCardData,
    countIndex,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Study);

