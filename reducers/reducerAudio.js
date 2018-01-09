import Sound from 'react-native-sound'



Sound.setCategory('Ambient', false)

const initState = {
  isPlaying: false,
  resumeMode: false,
  index: 1,
}

let mainTrack = null

export default function(state = initState, action) {
  switch(action.type){
    //var sound = null
    case 'CONTROL_AUDIO':
    //console.log(action.payload)
    //console.log(!mainTrack) 
      if (state.isPlaying) {
          console.log(state.isPlaying)
          mainTrack.pause()
          return {
            ...state,
            resumeMode: true,
            isPlaying: false
          }
      } else if (state.resumeMode) {
          mainTrack.play()
          return {
            ...state,
            isPlaying: true,
            resumeMode: false,
          }
        } else {
        // console.log(action.payload)
        let name = 'track_' +  state.index + '.mp3'
        const track = new Sound(name, Sound.MAIN_BUNDLE, (e) => {
              if (e) { 
                console.log('error', e)
              }
              track.play()
          });
          mainTrack = track
          return {
            ...state,
            isPlaying: true
        }
      }

    case 'CHANGE_AUDIO':
      if (mainTrack) { 
        mainTrack
            .stop() // trick parts
            .release();
        mainTrack = null
      }
      let newIndex = state.index
      if (action.payload == 'NEXT') {
        newIndex = newIndex + 1
        console.log(action.payload)
      } else if (action.payload == 'PREV') {
        newIndex = newIndex - 1
        console.log(action.payload)
      } else { }
      const track_name = 'track_'+ newIndex + '.mp3'
      const track = new Sound(track_name, Sound.MAIN_BUNDLE, (e) => {
              if (e) { 
                console.log('error', e)
              }
              track.play()
          });
      mainTrack = track
      return {
        ...state,
        isPlaying: true,
        index: newIndex
      }
    /*
    case 'NEXT_AUDIO':
      mainTrack
          .stop() // trick parts
          .release();
      mainTrack = null
      if (mainTrack) {return}
      const track_next = new Sound('track_'+ action.payload +'.mp3', Sound.MAIN_BUNDLE, (e) => {
            if (e) { 
              console.log('error', e)
            }
            track_next.play()
        });
      mainTrack = track_next
      return {
        ...state,
        id: action.payload
      }
    case 'PREV_AUDIO':
      mainTrack
          .stop() // trick parts
          .release();
      mainTrack = null
      if (mainTrack) {return}
      const track_prev = new Sound('track_'+ action.payload +'.mp3', Sound.MAIN_BUNDLE, (e) => {
            if (e) { 
              console.log('error', e)
            }
            track_prev.play()
        });
      mainTrack = track_prev
      return {
        ...state
      }
  */
    default:
      return state
  }
}
