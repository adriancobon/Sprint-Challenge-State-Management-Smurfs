import axios from 'axios';

// The following exports the commands programmed below.

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

// The following are the commands used to get, add, and delete smurfs from the server.

export const getSmurf = () => {
  return dispatch => {
    dispatch({type: FETCHING_SMURF});
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response})
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: ADDING_SMURF});
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: err.response})
      })
  }
}

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({type: DELETING_SMURF});
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data})
      })
      .catch(err =>
        dispatch({type: DELETE_SMURF_FAILURE, payload: err.response}))
  }
} 