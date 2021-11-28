import { GET_USER } from "./userActions";

const INITIAL_STATE = {
 user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };

  
    default:
      return state;
  }
};

export default userReducer;
