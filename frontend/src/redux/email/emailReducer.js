import { TAKE_EMAIL } from "./emailActions";


const INITIAL_STATE = {
  email:''
};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TAKE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };



    default:
      return state;
  }
};

export default emailReducer;
