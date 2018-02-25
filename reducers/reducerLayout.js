
import { Dimensions } from 'react-native'
const initState = {
	studyMarginHorizontal: 15,
	audioMarginLeft: 30,
	audioIconSize: 30,
	testCircleSize: 200,
	testMargin: 15,
	marginTopOfTest: 0,
}
export default function(state = initState, action) {
 	switch(action.type){
 		//case ''
 		case 'LAYOUT_CHANGED':
 			var {height, width} = Dimensions.get('window');
 			if (width >= 768 || height >= 1024) {
 				return {
 					...state,
 					studyMarginHorizontal: 50,
					audioMarginLeft: 50,
					audioIconSize: 40,
					testCircleSize: 350,
					marginTopOfTest: 40,
					testMargin: 100,
 				}
 			}
 		default:
 			return state
 	}
}