// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const redux = require("redux")

function changeCount(amount = 1) {
  return {
    type: "CHANGE_COUNT",
    payload: amount
  }
}

function addFavoriteThing(thing) {
  return {
    type: "ADD_FAVORITE_THING",
    payload: thing
  }
}

function removeFavoriteThing(thing) {
  return {
    type: "REMOVE_FAVORITE_THING",
    payload: thing
  }
}
function setvideotitle(title) {
  return {
    type: "SET_VIDEO_TITLE",
    payload: title
  }
}

function setUpVote() {
  return {
    type: "SET_UPVOTE",
  }
}

function setDownVote() {
  return {
    type: "SET_DOWNVOTE",
  }
}


const initialState = {
  count: 0,
  favoriteThings: [],
  youtubeVideo: {
    title: "",
    views: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
}

/**
 * Challenge:
 * Implement an action creator and reducer case to handle setting the title of our YouTube video
 */

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_COUNT":
      return {
        ...state,
        count: state.count + action.payload
      }
    case "ADD_FAVORITE_THING":
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payload]
      }
    case "REMOVE_FAVORITE_THING": {
      const arrCopy = [...state.favoriteThings]

      const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
      return {
        ...state,
        favoriteThings: updatedArr
      }
    }
    case "SET_VIDEO_TITLE":
      return {
        ...state, youtubeVideo: { ...state.youtubeVideo, title: action.payload }
      }
    case "SET_UPVOTE":
      return {
        ...state, youtubeVideo: { ...state.youtubeVideo, votes: { ...state.youtubeVideo.votes, up: state.youtubeVideo.votes.up + 1 } }
      }
    case "SET_DOWNVOTE":
      return {
        ...state, youtubeVideo: { ...state.youtubeVideo, votes: { ...state.youtubeVideo.votes, down: state.youtubeVideo.votes.down + 1 } }
      }

    default:
      return state
  }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(setvideotitle("ramram"))
store.dispatch(setUpVote())
store.dispatch(setUpVote())
store.dispatch(setDownVote())
store.dispatch(setvideotitle("deadpool"))

// store.dispatch()