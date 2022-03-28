import { SAVE_CLIENT } from "../actions";

const INITIAL_STATE = {
  clients: [],
}

const clientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.client]
      }
    default:
      return state;
  }
}

export default clientReducer;