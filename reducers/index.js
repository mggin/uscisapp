import {combineReducers} from 'redux'
import studyReducer from './reducerStudy'
import flashCardReducer from './reducerFlashCard'
import settingReducer from './reducerSetting'
import audioReducer from './reducerAudio'
import testReducer from './reducerTest'
import mainReducer from './reducerMain'
import wordsReducer from './reducerWords'



const allReducers = combineReducers({
   studyData: studyReducer,
   flashCard: flashCardReducer,
   settingData: settingReducer,
   audioData: audioReducer,
   testData: testReducer,
   mainData: mainReducer,
   wordsData: wordsReducer,

})

export default allReducers;
