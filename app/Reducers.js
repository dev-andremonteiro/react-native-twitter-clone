import { LOGIN, EXAMPLE } from "./actions";
import { combineReducers } from "redux";

function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return state;

    default:
      return state;
  }
}

function app(state = {}, action) {
  switch (action.type) {
    case EXAMPLE:
      return state;

    default:
      return state;
  }
}

const reducers = combineReducers({
  auth,
  app
});

export default reducers;
