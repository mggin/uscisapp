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
  TouchableOpacity
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
        } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import Swiper from 'react-native-swiper'
import * as color from '../components/color';
import * as font from '../components/font';
//import PageChild from './page'

class Study extends Component<{}> {
  
  _sliderFunc(value) {
    range = value - this.props.flashCard.index
    this.refs.swiper.scrollBy(range)
    
  }
  render() {
  console.disableYellowBox = true;
  //console.log(this.props.studyData.cardData[this.props.flashCard.index])
  //console.log('re run')
    return (
      <View style={{flex: 1, backgroundColor: "#4a86e8ff"}}>
        <View style={styles.num_box}>
          <View style={styles.num_style}>
            <Text style={styles.num_text}>{this.props.flashCard.index + 1}/100</Text>
          </View>
        </View>
        <View style={styles.card_box}>
          <Swiper style={styles.swiper_box}
                  onScrollBeginDrag={() => this.props.updateCard()}
                  ref='swiper'
                  showsPagination={false}
                  loop={false}
                  onIndexChanged={(index) => this.props.updateIndex(index)}>

          {
            this.props.studyData.cardData.map((data) => 

              <TouchableOpacity style={styles.card_style} key={data.id} activeOpacity={0.70} onPress={() => this.props.flipCard()}>
                <View style={styles.card_innerbox}>
                  <Text style={styles.card_txt}>{this.props.flashCard.front ? data.quesEng : data.quesLang}</Text>
                </View>
                <Text style={styles.dash_line}> . . . . . . . . {data.id}</Text>
                <View style={styles.card_innerbox}>
                   <Text style={styles.card_txt}>{this.props.flashCard.front ? data.ansEng : data.ansLang}</Text>
                </View>
              </TouchableOpacity>
            )
          }
    
          </Swiper>
        </View>
        <View style={styles.slider_box}>
          <Slider thumbImage={require('../../assets/thumb.png')}
                  minimumTrackTintColor="white"
                  step={1}
                  maximumValue={99}
                  minimumValue={0}
                  value={this.props.flashCard.index}
                  onSlidingComplete={(value) => this._sliderFunc(value)}
                  />
          <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
            <Text>Pres</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(-1)}>
            <Text>Pres Minus</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  num_box: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  card_box: {
    flex: 4,
  },
   slider_box: {
    flex: 1,
    margin: 30,
    marginHorizontal: 20,
  },
  card_style: {
    flex: 1,
    borderRadius: 7,
    padding: 20,
    margin: 20,
    backgroundColor: 'white'
  },
  num_style: {
    marginLeft: 20,
    marginBottom: 5,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: responsiveWidth(22),
    borderWidth: 1.5,
    borderColor: 'white',
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
    fontSize: 16,
    fontFamily: font.zawgyi,
    lineHeight: 25,
  },
  dash_line: {
    alignSelf: 'center'
  },
})

function mapStateToProps(state) {
  return {
    studyData: state.studyData,
    flashCard: state.flashCard
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCard,
    flipCard,
    updateIndex,
    getCardData,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Study);

