import { TOGGLE_HAMBURGUER_HIDDEN } from "./hamburguerActions";


const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const hamburguerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_HAMBURGUER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };



    default:
      return state;
  }
};

export default hamburguerReducer;
