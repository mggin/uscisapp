import RNFS from 'react-native-fs'
const Realm = require('realm')

const initState = {
  cardData: [],
  burmeseCardData: [],
  zomiCardData: [],
  engData: [],
  dataLoaded: false,
}

const stringObj = {
  name: 'stringObj',
  properties: {
    ques: 'string',
    ans: 'string'
  }
}

const uscis = {
  name: 'uscis',
  properties: {
    id: 'int',
    english: 'stringObj[]',
    zomi: 'stringObj[]',
    burma: 'stringObj[]'
  }
}
export default function(state = initState, action) {
    
  switch(action.type) {
    case 'GET_CARD_DATA':
    	// console.log(fs)
      const zomiCardData = action.zomiPayload
      const burmeseCardData = action.burmesePayload
      const engData = action.engPayload
      const dataLoaded = action.dataLoaded
      return {
        ...state,
        burmeseCardData,
        zomiCardData,
        engData,
        dataLoaded,
        cardData: zomiCardData
      }
      break
    case 'GET_CARD': 
      return state;
      break
    case 'SET_CARD_DATA':
    	console.log('SET_CARD_DATA')
    	if (action.payload === 'BURMESE') {
    		return {
    			...state,
    			cardData: state.burmeseCardData
    		}
    	} else {
    		return {
    			...state,
    			cardData: state.zomiCardData
    		}
    	}
      break
    default:

      return state
  }
}

