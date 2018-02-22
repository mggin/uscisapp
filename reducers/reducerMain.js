

const initState = {
	studyTab: true,
	audioTab: false,
	testTab: false,
	stateTab: false,
	wordTab: false,
	writeTab: false,
	settingTab: false,
	isTesting: false,
}
export default function(state = initState, action) {
 	switch(action.type){
 		case 'CHANGE_TAB':
 			if (action.payload == 0) {
 				return {
 					...state,
 					studyTab: true,
					audioTab: false,
					testTab: false,
					stateTab: false,
					wordTab: false,
					writeTab: false,
					settingTab: false,
					isTesting: false,
 				}
 			} else if (action.payload == 1) {
 				return {
 					...state,
 					studyTab: false,
					audioTab: true,
					testTab: false,
					stateTab: false,
					wordTab: false,
					writeTab: false,
					settingTab: false,
					isTesting: false,
 				}
 			} else if (action.payload == 2) {
 				return {
 					...state,
 					studyTab: false,
					audioTab: false,
					testTab: true,
					stateTab: false,
					wordTab: false,
					writeTab: false,
					settingTab: false,
					isTesting: true,
 				}
 			} else if (action.payload == 3) {
 				return {
 					...state,
 					studyTab: false,
					audioTab: false,
					testTab: false,
					stateTab: true,
					wordTab: false,
					writeTab: false,
					settingTab: false,
					isTesting: false,
 				}
 			} else if (action.payload == 4) {
 				return {
 					...state,
 					studyTab: false,
					audioTab: false,
					testTab: false,
					stateTab: false,
					wordTab: true,
					writeTab: false,
					settingTab: false,
					isTesting: false,
 				}
 			} else if (action.payload == 5) {
 				return {
 					...state,
 					studyTab: false,
					audioTab: false,
					testTab: false,
					stateTab: false,
					wordTab: false,
					writeTab: true,
					settingTab: false,
					isTesting: false,
 				}
 			} else if (action.payload == 6) {
 				return {
 					...state,
 					studyTab: false,
					audioTab: false,
					testTab: false,
					stateTab: false,
					wordTab: false,
					writeTab: false,
					settingTab: true,
					isTesting: false,
 				}
 			} else {
 				console.log('error occcured')
 			}
 			return {
 				...state
 			}
 			//break
 		case 'TRUE_TESTING':
 			return {
 				...state,
 				isTesting: false,
 			}
 		case 'FALSE_TESTING':
 			return {
 				...state,
 				isTesting: true,
 			}
 			//break
 		default:
 			return state
 	}
}