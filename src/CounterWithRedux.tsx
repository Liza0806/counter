import { useDispatch, useSelector } from "react-redux";
import {
  incrementAC,
  resetAC,
  resetAllAC,
  setMaxValueAC,
  setMinValueAC,
  submitAC,
} from "./store/actionCreators";
import { InitialStateType } from "./store/CounterWithReduxStore";

export const CounterWithRedux = () => {
  const currentValue: number = useSelector(
    (state: InitialStateType) => state.currentValue
  );
  const maxValue: number = useSelector(
    (state: InitialStateType) => state.maxValue
  );
  const minValue: number = useSelector(
    (state: InitialStateType) => state.minValue
  );

  const dispatch = useDispatch();
  const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAC(Number(e.target.value)));
  };
  const onChangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinValueAC(Number(e.target.value)));
  };
  const onSubmitHandler = (e: any) => {
    dispatch(submitAC(maxValue, minValue));
  };

  return (
    <div>
      REDUX COUNTER
      <form onSubmit={onSubmitHandler}>
        <label>
          max
          <input
            type="number"
            onChange={onChangeMaxValueHandler}
            value={maxValue}
            min={minValue}
          ></input>
        </label>
        <label>
          min
          <input
            type="number"
            onChange={onChangeMinValueHandler}
            value={minValue}
            min="0"
            max={maxValue - 1}
          ></input>
        </label>
      </form>
      <div>{currentValue}</div>
      <button onClick={() => dispatch(incrementAC())} disabled={currentValue >= maxValue}>inc</button>
      <button onClick={() => dispatch(resetAC(minValue))}>reset</button>
      <button onClick={() => dispatch(resetAllAC())}>resetAll</button>
    </div>
  );
};
