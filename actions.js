export const getCardData = (value) => {
	return {
		type: 'GET_CARD_DATA',
		payload: value,
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
		type: 'GET_TEST_DATA'
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
	return {
		type: 'HIDE_SCORE',
	}
}

export const submit = () => {
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
