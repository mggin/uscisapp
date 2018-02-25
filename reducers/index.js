import {combineReducers} from 'redux'
import { ignoreActions } from 'redux-ignore';
import studyReducer from './reducerStudy'
import flashCardReducer from './reducerFlashCard'
import settingReducer from './reducerSetting'
import audioReducer from './reducerAudio'
import testReducer from './reducerTest'
import mainReducer from './reducerMain'
import wordsReducer from './reducerWords'
import layoutReducer from './reducerLayout'



const allReducers = combineReducers({
   studyData: ignoreActions(studyReducer, ['DECREASE_FONT_SIZE', 'INCREASE_FONT_SIZE', 'SET_BURMESE_LANG', 'SET_ZOMI_LANG', 'GET_TEST_DATA']),
   flashCard: flashCardReducer,
   settingData: settingReducer,
   audioData: audioReducer,
   testData: testReducer,
   mainData: mainReducer,
   wordsData: wordsReducer,
   layoutData: layoutReducer

})

export default allReducers;
