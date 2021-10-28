import {TOKEN } from "./tokenActions";


const INITIAL_STATE = {
 tokenSave: '',
 
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        tokenSave: action.payload,
      };



    default:
      return state;
  }
};

export default tokenReducer;