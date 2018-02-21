

const initState = {
	index: 0,
	count: 0,
	front: true,
}
export default function(state = initState, action) {
 	switch(action.type){
 		case 'FLIP_CARD':
 			//console.log(action.payload)
 			//console.log('payload')
 			if (state.front) {
 				return {
 					...state,
 					front: false

 				}
 			} else {
 				return {
 					...state,
 					front: true
 				}
 			}
 			break
 		case 'UPDATE_CARD':
 			if (state.front) {
 				return state
 			} else {
 				return {
 					...state,
 					front: true
 				}
 			}
 			break
 		case 'COUNT_INDEX':
 			if (action.args == 'RIGHT') {
 				if (action.payload == 99) {
 					return {
 						...state,
 						count: 0,
 					}
 				} else {
 					return {
 						...state,
 						count: state.count + 1
 					}
 				}
 			} else if (action.args == 'LEFT') {
	 			if (action.payload == 0) {
	 				return {
	 					...state,
	 					count: 99
	 				}
	 			} else {
	 				return {
	 					...state,
	 					count: state.count - 1
	 				}
	 			}
 			} else {
 				console.log('Piggy got mad')
 			}
 		default:
 			return state
 	}
}