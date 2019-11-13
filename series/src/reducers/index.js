import { combineReducers } from 'redux';

const any = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ any });
