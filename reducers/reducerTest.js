import fs from 'react-native-fs'
const Realm = require('realm')

const initState = {
	allTestData: [],
	testItems: [],
	showResult: false,

}
export default function(state = initState, action) {
 	switch(action.type){
 		case 'GET_ALL_TEST_DATA':
 			const realm = new Realm({path: fs.MainBundlePath + '/uscis_test.realm'})
 		    const dataObj = realm.objects('test')
 		    const allTestData = []
 		    for (let data of dataObj) {
 		    	allTestData.push({
 		    		id: data.id,
 		    		ques: data.ques,
 		    		ans0: { answer: data.ans0[0].answer, correct: data.ans0[0].correct },
 		    		ans1: { answer: data.ans1[0].answer, correct: data.ans1[0].correct },
 		    		ans2: { answer: data.ans2[0].answer, correct: data.ans2[0].correct },
 		    		ans3: { answer: data.ans3[0].answer, correct: data.ans3[0].correct }

 		    	})
 		    }
 		    //console.log(testData)
 		    return {
 		    	...state,
 		    	allTestData,
 		    }
 			break
 		case 'GET_TEST_DATA':
 			testItems = []
 			for (let i = 0; i < 20; i++) {
 				let randomItem = state.allTestData[Math.floor(Math.random()*state.allTestData.length)];
 				testItems.push(randomItem)
 			}
 			return {
 				...state,
 				testItems,
 			}
 			break
 		case 'CHECK_ANSWER':
 			return {
 				...state,
 				showResult: true,
 			}
 		case 'RESET_RESULT':
 		console.log('reset result')
 			return {
 				...state,
 				showResult: false,
 			}
 		default:
 			return state
 	}
}