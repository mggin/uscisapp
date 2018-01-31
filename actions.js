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

export const checkAnswer = () => {
	return {
		type: 'CHECK_ANSWER',
	}
}

export const resetResult = () => {
	return {
		type: 'RESET_RESULT',
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



