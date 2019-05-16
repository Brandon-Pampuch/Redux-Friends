import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAILURE} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [{id: 1, name: 'loading...', age: 24, email: 'joe@lambdaschool.com',
      }],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
  }
export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state,
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      return { ...state,
        loggingIn: false
      }
    //failure needed for login
    case GET_DATA_START:
      return { ...state,
        loggingIn: true
      }
    case GET_DATA_SUCCESS:
    return{...state,
    friends: action.payload
    }
  
 
    
    default:
      return state;
  }
};