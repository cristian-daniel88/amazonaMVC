import { NOTFOUND } from "./notFoundActions";

const INITIAL_STATE = {
 notFound: false,

};

const notFoundReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTFOUND:
      return {
        ...state,
        notFound: !state.notFound
      };

   
  
    default:
      return state;
  }
};

export default notFoundReducer;
