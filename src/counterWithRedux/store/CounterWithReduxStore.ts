import { createStore } from "redux";
import { loadState, saveState } from "./stateStorageUtils";

export const initialState: InitialStateType = loadState() || {
  currentValue: 0,
  maxValue: 0,
  minValue: 0,
  error: false,
};

export type InitialStateType = {
  currentValue: number;
  maxValue: number;
  minValue: number;
  error: boolean;
};

const reducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case "inc": {
      state.currentValue + 1 > state.maxValue
        ? (state = { ...state })
        : (state = { ...state, currentValue: state.currentValue + 1 });
      return state;
    }
    case "submit":
      return { ...state, maxValue: action.maxValue, minValue: action.minValue };
    case "setMaxValue": {
      state.minValue < action.maxValue
        ? (state = { ...state, maxValue: action.maxValue })
        : (state = { ...state });
      return state;
    }
    case "setMinValue": {
      action.minValue < state.maxValue
        ? (state = { ...state, minValue: action.minValue })
        : (state = { ...state });
      action.minValue > state.currentValue
        ? (state = { ...state, currentValue: action.minValue })
        : (state = { ...state });
      return state;
    }
    case "reset": {
      return { ...state, currentValue: action.minValue || 0 };
    }
    case "resetAll": 
      return state = {
        currentValue: 0,
        maxValue: 0,
        minValue: 0,
        error: false,
      };
    
    default:
      return state;
  }
};
const store = createStore(reducer);
store.subscribe(() => {
  saveState(store.getState());
});
export default store;
