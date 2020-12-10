import * as types from "../actions/ActionTypes";

const initialState = {
  color: null,
  borderColor: null,
};

function moduleColor(state = initialState, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
}

export default moduleColor;
