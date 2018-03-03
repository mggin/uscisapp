import { Alert } from 'react-native'

export const getCardData = (value) => {
	return {
		type: 'GET_CARD_DATA',
		payload: value,
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
	return {
		type: 'GET_ALL_TEST_DATA'
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