import { BUTTONS_DISABLE, BUTTONS_ENABLE, COUNTER_DECREMENT, COUNTER_INCREMENT, THEME_CHANGE } from "./rootReducer";

export function increment() {
  return {
    type: COUNTER_INCREMENT,
  };
}

export function decrement() {
  return {
    type: COUNTER_DECREMENT,
  };
}

export function asyncIncrement() {
  return (dispatch) => {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch(increment());
      dispatch(enableButtons());
    }, 1500);
  };
}

export function disableButtons() {
  return {
    type: BUTTONS_DISABLE,
  };
}

export function enableButtons() {
  return {
    type: BUTTONS_ENABLE,
  };
}

export function changeTheme(newTheme) {
  return {
    type: THEME_CHANGE,
    payload: newTheme,
  };
}
