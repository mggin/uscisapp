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
	showScore: true,
	isSuccess: false,
	isSubmit: false,
	percentage: 0,
	count: 0,
	//isTesting: false,

}
const ansObj = {
  name: 'ansObj',
  properties: {
    answer: 'string',
    correct: 'bool'
  }
}

const test = {
  name: 'test',
  properties: {
    id: 'int',
    ques: 'string',
    ans0: 'ansObj[]',
    ans1: 'ansObj[]',
    ans2: 'ansObj[]',
    ans3: 'ansObj[]'
  }
}
export default function(state = initState, action) {
 	switch(action.type){
 		case 'GET_ALL_TEST_DATA':
 			//const realm = new Realm({path: fs.LibraryDirectoryPath + '/' + 'uscis_test.realm', scheme: [test]})
 			const realm = new Realm({path: fs.MainBundlePath + '/' + 'uscis_test.realm', scheme: [test]})
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
 			condition = true
 			while (condition) {
 				let randomItem = state.allTestData[Math.floor(Math.random()*state.allTestData.length)];
 				if (testItems.length == 20) {
 					condition = false
 				} else if (!testItems.includes(randomItem)) {
 					testItems.push(randomItem)
 				} else { }
 			}
 			return {
 				...state,
 				testItems,
 				count: 0,
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
 				//isTesting: true,
 			}
 		case 'SUBMIT':
 			let percentage = state.score * 100/20
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
				isSubmit: false,
				score: 0,
 				percentage,
 				isSuccess,

 			}
 		case 'CHANGE_BTN': {
 			return {
 				...state,
 				isSubmit: true
 			}
 		}
 		default:
 			return state
 	}
}