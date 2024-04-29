
export const incrementAC = () => {
    return { type: "inc" };
  };
  export const submitAC = (maxValue: number, minValue: number) => {
    return { type: "submit", maxValue: maxValue, minValue: minValue };
  };
  export const setMaxValueAC = (maxValue: number) => {
    return { type: "setMaxValue", maxValue: maxValue};
  };
  export const setMinValueAC = (minValue: number) => {
    return { type: "setMinValue", minValue: minValue};
  };
  export const resetAC = (minValue: number) => {
    return { type: "reset", minValue: minValue };
  };
  export const resetAllAC = () => {
    return { type: "resetAll"};
  };