
import Tts from 'react-native-tts'

const initState = {
	speaking: false,
}
export default function(state = initState, action) {
 	switch(action.type){
 		case 'TRIGGER_SPEECH':
 			if (state.speaking) {
 				Tts.stop()
 				return {
 					...state,
 					speaking: false
 				}
 			} else {
 				Tts.speak(action.payload)
 				return {
 					...state,
 					speaking: true,
 				}
 			}
 			return state
 			break
 		default:
 			return state
 	}
}