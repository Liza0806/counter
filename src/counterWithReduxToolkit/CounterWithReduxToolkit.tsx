import { useDispatch } from 'react-redux';
// import {
//   incrementAC,
//   resetAC,
//   resetAllAC,
//   setMaxValueAC,
//   setMinValueAC,
// } from "./store/actionCreators";
// import { InitialStateType } from "./store/CounterWithReduxStore";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useEffect } from "react";
import { fetchCounter } from "./store/operations";

const URL = 'https://counter-backend-32kc.onrender.com/api/counter'



export const CounterWithReduxToolkit = () => {
    const dispatch = useDispatch();
   // const filter = useSelector((state) => state.filter.filter);
      

   useEffect(() => {
    dispatch(fetchCounter());
  }, );

  const currentValue: number = 0
 // : number = useSelector(
   // (state: InitialStateType) => state.currentValue
//  );
  const maxValue: number = 0
  // useSelector(
  //  (state: InitialStateType) => state.maxValue
 // );
  const minValue: number = 0
  // useSelector(
  //  (state: InitialStateType) => state.minValue
 // );


  const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setMaxValueAC(Number(e.target.value)));
  };

  const onChangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
   // dispatch(setMinValueAC(Number(e.target.value)));
  };
  const handleIncrement = () => {
  //  dispatch(incrementAC());
  };
  const handleReset = () => {
  //  dispatch(resetAC(minValue));
  };
  const handleResetAll = () => {
//    dispatch(resetAllAC());
  };
  return (
    <div>
      <h1>REDUX COUNTER</h1>
      <form>
        <Input
          label="Max"
          value={maxValue}
          min={minValue}
          onChange={onChangeMaxValueHandler}
        />
        <Input
          label="Min"
          value={minValue}
          min={0}
          max={maxValue - 1}
          onChange={onChangeMinValueHandler}
        />
      </form>
      <div>{currentValue}</div>
      <Button
        onClick={handleIncrement}
        title="inc"
        disabled={currentValue >= maxValue}
      />
      <Button onClick={handleReset} title="reset" />
      <Button onClick={handleResetAll} title="resetAll" />
    </div>
  );
};
