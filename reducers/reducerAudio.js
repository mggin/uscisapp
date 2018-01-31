import Sound from 'react-native-sound'



Sound.setCategory('Ambient', false)

const initState = {
  isPlaying: false,
  resumeMode: false,
  index: 1,
  loop: false,
  auto: true,
  nextMode: false,
}

let mainTrack = null
let nextMode = false

export default function(state = initState, action) {
  switch(action.type){
    //var sound = null
    case 'LOOP_CTRL': {
      if (state.loop) {
        return {
          ...state,
          loop: false
        }
      } else {
        return {
          ...state,
          loop: true
        }
      }
    }
    case 'AUTO_CTRL':
      //console.log('auto out')
      //mainTrack.getDuration()
      let track_num = state.index
      if (mainTrack && state.auto) {
        //console.log(mainTrack.getDuration())
        //mainTrack.getCurrentTime((seconds) => console.log('at ' + seconds));
        console.log(nextMode)
        if (nextMode) {
          ///track_num = state.index + 1
          mainTrack
            .stop() // trick parts
            .release();
          mainTrack = null
          track_num = state.index + 1
          let name = 'track_' +  track_num + '.mp3'
          const track = new Sound(name, Sound.MAIN_BUNDLE, (e) => {
              if (e) { 
                console.log('error', e)
              } else if (state.loop) {
                track.setNumberOfLoops(-1);
                track.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                      nextMode = true
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      track.reset();
                    }
                });
              } else {}
              track.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                      nextMode = true
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      track.reset();
                    }
              });
          });
          mainTrack = track
          nextMode = false
        }
            
      }
      return {
        ...state,
        index: track_num
      }
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
              } else if (state.loop) {
                track.setNumberOfLoops(-1);
                track.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                      nextMode = true
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      track.reset();
                    }
                });
              } else {}
              track.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                      nextMode = true
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      track.reset();
                    }
              });
          });
          mainTrack = track
          nextMode = false
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
        if (newIndex == 100) {
          newIndex = 1
        }
        console.log(action.payload)
      } else if (action.payload == 'PREV') {
        newIndex = newIndex - 1
        if (newIndex == 0) {
          newIndex = 99
        }
        console.log(action.payload)
      } else { }
      const track_name = 'track_'+ newIndex + '.mp3'
      const track = new Sound(track_name, Sound.MAIN_BUNDLE, (e) => {
              if (e) { 
                console.log('error', e)
              } else if (state.loop) {
                // track.setNumberOfloops(-1);
                track.setNumberOfLoops(-1);
                track.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                      nextMode = true
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      track.reset();
                    }
                });
              } else {}
              track.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                      nextMode = true
                    } else {
                      console.log('playback failed due to audio decoding errors');
                      // reset the player to its uninitialized state (android only)
                      // this is the only option to recover after an error occured and use the player again
                      track.reset();
                    }
              });
          });
      mainTrack = track
      nextMode = false
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
