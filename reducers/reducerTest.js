import fs from 'react-native-fs'
import * as color from '../app/components/color';
const Realm = require('realm')

const initState = {
	allTestData: [],
	testItems: [],
	currentIndex: 0,
	showResult: false,
	nextBtn: false,
	score: 0,
	showScore: false,
	isSuccess: false,
	percentage: undefined,

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
 			console.log('he')
 			let score = state.score
 			if (action.payload) {
 				score++	
 			}
 			return {
 				...state,
 				nextBtn: true,
 				showResult: true,
 				score,
 			}
 		case 'RESET_RESULT':
 		    console.log('reset result')
 			return {
 				...state,
 				showResult: false,
 				nextBtn: false,
 			}
 		case 'INDEX_CHANGED':
 			return {
 				...state,
 				currentIndex: action.payload,
 				showResult: false,
 				nextBtn: false,
 			}
 		case 'HIDE_SCORE':
 			return {
 				...state,
 				showScore: false,
 			}
 		case 'SUBMIT':
 			let percentage = state.score * 100/3
 			console.log(state.score)
 			console.log(percentage)
 			let isSuccess;
  			if (percentage >= 50) {
 				isSuccess = true
 			}
 			return {
 				...state,
 				showScore: true,
				currentIndex: 0,
				showResult: false,
				nextBtn: false,
				score: 0,
 				percentage,
 				isSuccess,

 			}
 		default:
 			return state
 	}
}