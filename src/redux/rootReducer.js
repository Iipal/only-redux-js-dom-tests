import { combineReducers } from "redux";

/*
----- COUNTER REDUCER SETUP -----
*/

export const COUNTER_INCREMENT = "counterInc";
export const COUNTER_DECREMENT = "counterDec";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

/*
----- THEME REDUCER SETUP -----
*/

export const BUTTONS_DISABLE = "btnsDisable";
export const BUTTONS_ENABLE = "btnsEnable";

export const THEME_CHANGE = "themeChange";

const initThemeState = {
  value: "light",
  disabled: false,
};

function themeReducer(state = initThemeState, action) {
  switch (action.type) {
    case BUTTONS_DISABLE:
      return { ...state, disabled: true };
    case BUTTONS_ENABLE:
      return { ...state, disabled: false };
    case THEME_CHANGE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

/*
----- COMBINE REDUCERS -----
*/

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
