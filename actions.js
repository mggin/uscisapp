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

export const countIndex = (value) => {
	return {
		type: 'COUNT_INDEX',
		payload: value
	}
}

export const setLang = (value) => {
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



