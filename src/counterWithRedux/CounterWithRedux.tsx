import { useDispatch, useSelector } from "react-redux";
import {
  incrementAC,
  resetAC,
  resetAllAC,
  setMaxValueAC,
  setMinValueAC,
} from "./store/actionCreators";
import { InitialStateType } from "./store/CounterWithReduxStore";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

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
   const handleIncrement = () => {
    dispatch(incrementAC())
  }
   const handleReset = () => {
    dispatch(resetAC(minValue))
  }
   const handleResetAll = () => {
    dispatch(resetAllAC())
  }
   return (
    <div>
      <h1>REDUX COUNTER</h1>
     
      <form>
<Input label="Max" value={maxValue} min={minValue} onChange={onChangeMaxValueHandler}/>
<Input label="Min"  value={minValue} min={0} max={maxValue - 1} onChange={onChangeMinValueHandler}/>
      </form>
      <div>{currentValue}</div>
      <Button onClick={handleIncrement} title="inc" disabled={currentValue >= maxValue}/>
      <Button onClick={handleReset} title="reset"/>
      <Button onClick={handleResetAll} title="resetAll"/>
    </div>
  );
};
