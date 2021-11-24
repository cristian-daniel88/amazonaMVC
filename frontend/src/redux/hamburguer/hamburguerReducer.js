import { TOGGLE_HAMBURGUER_HIDDEN, TOGGLE_HAMBURGUER_HIDDENCHAT} from "./hamburguerActions";

const INITIAL_STATE = {
  hidden: true,
  hiddenChat: true,
  cartItems: [],
};

const hamburguerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_HAMBURGUER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case TOGGLE_HAMBURGUER_HIDDENCHAT:
      return {
        ...state,
        hiddenChat: !state.hiddenChat,
      };

    default:
      return state;
  }
};

export default hamburguerReducer;
