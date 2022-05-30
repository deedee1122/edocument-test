import { ALL_CONSTANTS } from "../Constants/Constants";

let { LOGIN } = ALL_CONSTANTS;

let initialState = {
  token: "",
};

export let Auth_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, token: payload };
    default:
      return state;
  }
};
