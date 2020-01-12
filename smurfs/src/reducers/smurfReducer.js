import {
    FETCHING_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    DELETE_SMURF_FAILURE,
    DELETING_SMURF,
    DELETE_SMURF_SUCCESS,
    ADDING_SMURF,
    ADD_SMURF_FAILURE,
    ADD_SMURF_SUCCESS
  } from '../actions/getSmurf';
  
  const initialState = {
    smurf: [],
    err: '',
    isLoading: false
  }

//   The following was covered during class on Thursday.
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF:
        return {
          ...state,
          isLoading: true
        }
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          isLoading: false,
          err: '',
          smurf: action.payload
        }
      case FETCH_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          err: action.payload
        }
      case ADDING_SMURF:
        return {
          ...state,
          isLoading: true
        }
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          isLoading: false,
          err: '',
          smurf: action.payload
        }
      case ADD_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          err: action.payload
        }
      case DELETING_SMURF:
        return {
          ...state,
          isLoading: true
        }
      case DELETE_SMURF_SUCCESS:
        return {
          ...state,
          isLoading: false,
          err: '',
          smurf: action.payload
        }
      case DELETE_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          err: action.payload
        }
      default:
        return state;
    }
  } 