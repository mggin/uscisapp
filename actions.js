import { Alert } from 'react-native'
import RNFS from 'react-native-fs'
import Realm from 'realm'

function addTodo(text) {
  return (dispatch) => {
    dispatch({ type: 'ADD_TODO_START' });
    Api.createTodo(text).then(
      (todo) => dispatch({
        type: 'ADD_TODO_SUCCESS',
        payload: todo
      }),
      (err) => dispatch({
        type: 'ADD_TODO_FAIL',
        error: true,
        payload: err
      })
    );
  }
}
/*
export const getCardData = (value) => {
	return {
		type: 'GET_CARD_DATA',
		payload: value,
	}
}
*/
const stringObj = {
  name: 'stringObj',
  properties: {
    ques: 'string',
    ans: 'string'
  }
}

const uscis = {
  name: 'uscis',
  properties: {
    id: 'int',
    english: 'stringObj[]',
    zomi: 'stringObj[]',
    burma: 'stringObj[]'
  }
}
export const getCardData = (value) => {
	const sourcePath = RNFS.MainBundlePath + '/uscis.realm';
    const destinPath = RNFS.DocumentDirectoryPath + '/uscis.realm';
    const zomiCardData = []
    const burmeseCardData = []
    const engData = []
	let dataLoaded = false;
	return (dispatch) => {
		dispatch({type: 'GET_CARD'})
		RNFS.unlink(destinPath)
		RNFS.copyFile(sourcePath, destinPath)
			.then(success => {
				const realm = new Realm({path: 'uscis.realm'})
				const dataObj = realm.objects('uscis')
			    for (let data of dataObj) {
			        let burQues = data.burma[0].ques.replace(new RegExp('\\\\', 'g'), '')
			        let burAns = data.burma[0].ans.replace(new RegExp('\\\\', 'g'), '')
			        let engQues = data.english[0].ques.replace(new RegExp('\\\\', 'g'), '')
			        let engAns = data.english[0].ans.replace(new RegExp('\\\\', 'g'), '')
			        let zomiQues = data.zomi[0].ques.replace(new RegExp('\\\\', 'g'), '')
			        let zomiAns = data.zomi[0].ans.replace(new RegExp('\\\\', 'g'), '')
			      
			        engData.push(
			          {
			            quesEng: engQues,
			            ansEng: engAns
			          })
			        zomiCardData.push(
			          {
			            id: data.id,
			            quesEng: engQues,
			            ansEng: engAns,
			            quesLang: zomiQues,
			            ansLang: zomiAns  
			          })
			        burmeseCardData.push(
			          {
			            id: data.id,
			            quesEng: engQues,
			            ansEng: engAns,
			            quesLang: burQues,
			            ansLang: burAns
			          })
				}
				console.log(burmeseCardData)
				dispatch({
					type: 'GET_CARD_DATA',
					zomiPayload: zomiCardData,
					burmesePayload: burmeseCardData,
					engPayload: engData,
					dataLoaded: true,
				})
			})
			.catch((err) => {
				//console.log(err)
				const realm = new Realm({path: 'uscis.realm'})
				const dataObj = realm.objects('uscis')
			    for (let data of dataObj) {
			        let burQues = data.burma[0].ques.replace(new RegExp('\\\\', 'g'), '')
			        let burAns = data.burma[0].ans.replace(new RegExp('\\\\', 'g'), '')
			        let engQues = data.english[0].ques.replace(new RegExp('\\\\', 'g'), '')
			        let engAns = data.english[0].ans.replace(new RegExp('\\\\', 'g'), '')
			        let zomiQues = data.zomi[0].ques.replace(new RegExp('\\\\', 'g'), '')
			        let zomiAns = data.zomi[0].ans.replace(new RegExp('\\\\', 'g'), '')
			      
			        engData.push(
			          {
			            quesEng: engQues,
			            ansEng: engAns
			          })
			        zomiCardData.push(
			          {
			            id: data.id,
			            quesEng: engQues,
			            ansEng: engAns,
			            quesLang: zomiQues,
			            ansLang: zomiAns  
			          })
			        burmeseCardData.push(
			          {
			            id: data.id,
			            quesEng: engQues,
			            ansEng: engAns,
			            quesLang: burQues,
			            ansLang: burAns
			          })
				}
				console.log(burmeseCardData)
				dispatch({
					type: 'GET_CARD_DATA',
					zomiPayload: zomiCardData,
					burmesePayload: burmeseCardData,
					engPayload: engData,
					dataLoaded: true,
				})
			})
		}
	}

export const getFontInfo = (fontSize, lang) => {
	return {
		type: 'GET_FONT_INFO',
		fontSize,
		lang
	}
}

export const setFontInfo = () => {
  return {
    type: 'SET_FONT_INFO'
  }
}

export const setCardData = (value) => {
	return {
		type: 'SET_CARD_DATA',
		payload: value,
	}
}

export const updateCard = () => {
	return {
		type: 'UPDATE_CARD',
	}
}

export const flipCard = () => {
	return {
		type: 'FLIP_CARD'
	}
}

export const updateIndex = (value) => {
	return {
		type: 'UPDATE_INDEX',
		payload: value
	}
}

export const countIndex = (value, value1) => {
	return {
		type: 'COUNT_INDEX',
		payload: value,
		args: value1,
	}
}

export const setLang = (value) => {
	console.log('setlang')
	return {
		type: 'SET_LANG',
		payload: value
	}
}

export const controlAudio = (value) => {
	return {
		type: 'CONTROL_AUDIO',
		payload: value
	}
}

export const changeAudio = (value) => {
	return {
		type: 'CHANGE_AUDIO',
		payload: value
	}
}

export const loopControl = () => {
	return {
		type: 'LOOP_CTRL',
	}
}

export const autoControl = () => {
	return {
		type: 'AUTO_CTRL',
	}
}

export const getAllTestData = () => {
	const sourcePath2 = RNFS.MainBundlePath + '/uscis_test.realm';
    const destinPath2 = RNFS.DocumentDirectoryPath + '/uscis_test.realm';
    const allTestData = []
	return (dispatch) => {
		dispatch({type: 'GET_TEST'})
	    RNFS.unlink(destinPath2);
		RNFS.copyFile(sourcePath2, destinPath2)
			.then(success => {
			console.log(success)
			const realm = new Realm({path: 'uscis_test.realm'})
			const dataObj = realm.objects('test')
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
			dispatch({
				type: 'GET_ALL_TEST_DATA',
				allTestPayload: allTestData
			})	
		})
		.catch((err) => {
			//console.log(err)
			const realm = new Realm({path: 'uscis_test.realm'})
			const dataObj = realm.objects('test')
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
			dispatch({
				type: 'GET_ALL_TEST_DATA',
				allTestPayload: allTestData
			})
		})
	}	
}

export const getTestData = () => {
	return {
		type: 'GET_TEST_DATA',
	}
}

export const checkAnswer = (value) => {
	return {
		type: 'CHECK_ANSWER',
		payload: value,
	}
}

export const resetResult = () => {
	return {
		type: 'RESET_RESULT',
	}
}

export const indexChanged = (value) => {
	return {
		type: 'INDEX_CHANGED',
		payload: value,
	}
}

export const changeTab = (value) => {
	//Alert.alert('Alert Title')
	//hideScore();
	//getTestData();
	return {
		type: 'CHANGE_TAB',
		payload: value.i,
	}
}

export const triggerSpeech = (value) => {
	return {
		type: 'TRIGGER_SPEECH',
		payload: value,
	}
}

export const hideScore = () => {
	console.log('hidescore')
	return {
		type: 'HIDE_SCORE',
	}
}

export const submit = () => {
	trueTesting()
	return {
		type: 'SUBMIT'
	}
}

export const changeBtn = () => {
	return {
		type: 'CHANGE_BTN'
	}
}

export const setZomiLang = (value) => {
	return {
		type: 'SET_ZOMI_LANG',
		payload: value,
	}
}

export const setBurmeseLang = (value) => {
	return {
		type: 'SET_BURMESE_LANG',
		payload: value,
	}
}

export const increaseFontSize = () => {
	return {
		type: 'INCREASE_FONT_SIZE'
	}
}

export const decreaseFontSize = () => {
	return {
		type: 'DECREASE_FONT_SIZE'
	}
}

export const falseTesting = () => {
	return {
		type: 'FALSE_TESTING'
	}
}

export const trueTesting = () => {
	return {
		type: 'TRUE_TESTING'
	}
}

export const showScore = () => {
	return {
		type: 'SHOW_SCORE'
	}
}

export const getScore = (score) => {
	return {
		type: 'GET_SCORE',
		payload: score
	}
}
export const storeScore = () => {
	return {
		type: 'STORE_SCORE',
	}
}

export const layoutChanged = () => {
	return {
		type: 'LAYOUT_CHANGED'
	}
}

export const initFont = () => {
	return {
		type: 'INITIAL_FONT'
	}
}

export const setInitialCount = () => {
	return {
		type: 'INITIAL_COUNT'
	}
}