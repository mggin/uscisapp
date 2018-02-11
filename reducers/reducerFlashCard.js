

const initState = {
	index: 0,
	count: 0,
	front: false,
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
 			return {
 				...state,
 				front: true
 			}
 			break
 		case 'UPDATE_INDEX':
 			//if (action.payload)
 			//console.log(action.payload)
 			//console.log('payload')
 			return {
 				...state,
 				count: action.payload,
 				index: action.payload
 			}
 		case 'COUNT_INDEX':
 			return {
 				...state,
 				count: action.payload
 			}
 		default:
 			return state
 	}
}