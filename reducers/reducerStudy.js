import fs from 'react-native-fs'
const Realm = require('realm')

const initState = {
  cardData: [],
  burmeseCardData: [],
  zomiCardData: [],
  engData: [],
}

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
export default function(state = initState, action) {
  
  switch(action.type) {
    case 'GET_CARD_DATA':
    	// console.log(fs)

    	  const realm = new Realm({path: fs.MainBundlePath +'/' +'uscis.realm', scheme: [uscis]})
        //const realm = new Realm({path: fs.LibraryDirectoryPath +'/' +'uscis.realm', scheme: [uscis]})
 		    const dataObj = realm.objects('uscis')
 		    const zomiCardData = []
 		    const burmeseCardData = []
        const engData = []
 		    for (let data of dataObj) {
 		    	let burQues = data.burma[0].ques.replace(new RegExp('\\\\', 'g'), '')
 		    	let burAns = data.burma[0].ans.replace(new RegExp('\\\\', 'g'), '')
 		    	let engQues = data.english[0].ques.replace(new RegExp('\\\\', 'g'), '')
 		    	let engAns = data.english[0].ans.replace(new RegExp('\\\\', 'g'), '')
 		    	let zomiQues = data.zomi[0].ques.replace(new RegExp('\\\\', 'g'), '')
 		    	let zomiAns = data.zomi[0].ans.replace(new RegExp('\\\\', 'g'), '')
 		    	/*
 		    	if (action.payload === 'BURMESE') {
 		    		langQues = burQues
 		    		langAns = burAns
 		    	} else {
 		    		langQues = zomiQues
 		    		langAns = zomiAns
 		    	}
 		    	*/
 		    	//let langQues = data.burma[0].ques.replace(new RegExp('\\\\', 'g'), '')
 		    	//let langAns = data.burma[0].ans.replace(new RegExp('\\\\', 'g'), '')
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
        return {
        	...state,
        	burmeseCardData,
        	zomiCardData,
          engData,
        }
    case 'SET_CARD_DATA':
    	console.log('SET_CARD_DATA')
    	if (action.payload === 'BURMESE') {
    		return {
    			...state,
    			cardData: state.burmeseCardData
    		}
    	} else {
    		return {
    			...state,
    			cardData: state.zomiCardData
    		}
    	}
    default:

      return state
  }
}

