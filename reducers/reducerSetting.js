
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
      //console.log(action.family + action.size)
      if (action.fontSize == null || action.lang == null) {
        console.log('nan')
        //Alert.alert('nan')
        return state 
      } else {
        //console.log(action.size)
        //Alert.alert(action.lang)
        if (action.lang == 'ZOMI') {
          return {
            ...state,
            zomiLang: true,
            burmeseLang: false,
            fontSize: parseInt(action.fontSize)
          }
        } else if (action.lang == 'BURMESE') {
          //Alert.alert(action.lang)
          return {
            ...state,
            zomiLang: false,
            burmeseLang: true,
            fontSize: parseInt(action.fontSize)
          }
        } else {}
        return {
          ...state
        }
      }
    case 'SET_FONT_INFO':
      //console.log('set info' + state.fontFamily)
      let language;
      if (state.zomiLang) {
        language = 'ZOMI'
      } else {
        language = 'BURMESE'
      }
      let stringFontSize = state.fontSize.toString()
      const fontInfoSet = [['@lang', language], ['@fontSize', stringFontSize]]
      // console.log(fontInfo)
      AsyncStorage.multiSet(fontInfoSet)
      /*
      AsyncStorage.multiGet(['@fontSize', '@lang'])
      .then((fontInfo) => {
         //console.log(fontInfo[0][1])
         // console.log(fontInfo)
         // console.log(fontInfo[0][1])
         Alert.alert(fontInfo[0][1], fontInfo[1][1])

         //this.props.getFontInfo(fontInfo[0][1], fontInfo[1][1])
    })
    */
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
    case 'INITIAL_FONT': 
      var {height, width} = Dimensions.get('window');
      if (width == 375 || height == 667) {
        return {
          ...state,
          fontSize: 15
        }
      } else if (width >= 768 || height >= 1024) {
        return {
          ...state,
          fontSize: 20
        }
      } else {
        return state
      }
    
    default:

      return state
  }
}