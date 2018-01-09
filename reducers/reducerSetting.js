

const initState = {
	lang: 'ZOMI'
}
export default function(state = initState, action) {
 	switch(action.type){
 		case 'SET_LANG':
 			return {
 				...state,
 				lang: action.payload
 			}
 			break
 		default:
 			return state
 	}
}