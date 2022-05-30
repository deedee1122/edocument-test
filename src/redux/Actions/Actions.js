import { ALL_CONSTANTS } from "../Constants/Constants";

let { LOGIN } = ALL_CONSTANTS;

export let LoginAuth = (token) => {
  return {
    type: LOGIN,
    payload: token,
  };
};
