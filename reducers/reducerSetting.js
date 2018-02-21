
import { AsyncStorage, Dimensions} from 'react-native'

const initState = {
	zomiLang: true,
	burmeseLang: false,
  	fontSize: 17,
  	iconSize: 30,
}

export default function(state = initState, action) {
  
  switch(action.type) {
    case 'GET_FONT_INFO':
      //console.log('get font')
      console.log(action.family + action.size)
      if (action.size == null || action.family == null) {
        console.log('nan')
        return state 
      } else {
        //console.log(action.size)
        return {
          ...state,
          fontFamily: action.family,
          fontSize: parseInt(action.size),
        }
        

      }
    case 'SET_FONT_INFO':
      //console.log('set info' + state.fontFamily)
      let stringFontSize = state.fontSize.toString()
      const fontInfoSet = [['@lang', state.lang], ['@fontSize', stringFontSize]]
      // console.log(fontInfo)
      AsyncStorage.multiSet(fontInfoSet)
      return state
    case 'SET_ZOMI_LANG':
    	if (!action.payload) {
    		return {
    			...state,
    			burmeseLang: true,
    			zomiLang: false,
    		}
    	} else {
    		return {
    			...state,
    			burmeseLang: false,
    			zomiLang: true,
    		}
    	}
     	return state
    case 'SET_BURMESE_LANG':
    	if (!action.payload) {
    		return {
    			...state,
    			burmeseLang: false,
    			zomiLang: true,
    		}
    	} else {
    		return {
    			...state,
    			burmeseLang: true,
    			zomiLang: false,
    		}
    	}
     	return state
    case 'INCREASE_FONT_SIZE':
      if (state.fontSize == 30) {
        return {
          ...state,
          fontSize: 10
        }
      } else {
        return {
          ...state,
          fontSize: state.fontSize + 1
        }
      }
    case 'DECREASE_FONT_SIZE':
      if (state.fontSize == 10) {
        return {
          ...state,
          fontSize: 30
        }
      } else {
        return {
          ...state,
          fontSize: state.fontSize - 1
        }
      }
    
    
    default:

      return state
  }
}