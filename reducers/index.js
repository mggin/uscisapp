import {combineReducers} from 'redux'
import studyReducer from './reducerStudy'
import flashCardReducer from './reducerFlashCard'
import settingReducer from './reducerSetting'
import audioReducer from './reducerAudio'
import testReducer from './reducerTest'



const allReducers = combineReducers({
   studyData: studyReducer,
   flashCard: flashCardReducer,
   settingData: settingReducer,
   audioData: audioReducer,
   testData: testReducer,

})

export default allReducers;
