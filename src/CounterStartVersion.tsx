import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

export const CounterStartVersion = () => {
    let [currentValue, setCurrentValue] = useState(0);
    let [maxValue, setMaxValue] = useState(0);
    let [minValue, setMinValue] = useState(0);

    useEffect(() => {
        let startLSValue = Number(localStorage.getItem("currentValue"));
        let startLSMaxValue = Number(localStorage.getItem("maxValue"));
        let startLSMinValue = Number(localStorage.getItem("minValue"));
    
        startLSMinValue && startLSMinValue >= startLSValue
          ? setCurrentValue(startLSMinValue)
          : setCurrentValue(startLSValue);
        startLSMaxValue ? setMaxValue(startLSMaxValue) : setMaxValue(0);
        startLSMinValue ? setMinValue(startLSMinValue) : setMinValue(0);
      }, []);
    
      useEffect(() => {
        localStorage.setItem("currentValue", JSON.stringify(currentValue));
      }, [currentValue]);

      const onClickHandler = () => {
        setCurrentValue(currentValue + 1);
      };
      const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.target.value));
      };
      const onChangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.target.value));
      };
      const onSubmitHandler = (e: any) => {
        e.preventDefault();
        localStorage.setItem("minValue", JSON.stringify(minValue));
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
        if (currentValue < minValue) {
          setCurrentValue(minValue);
        }
      };
      const onClickResetHandler = () => {
        setCurrentValue(minValue);
        localStorage.setItem("currentValue", JSON.stringify(minValue));
      };
return(
      <div>
        <form onSubmit={onSubmitHandler}>
          <Input
            onChange={onChangeMaxValueHandler}
            label="Max value:"
            maxValue={maxValue}
            minValue={minValue}
            min={minValue + 1}
            value={maxValue}
          />

          <div>
            <Input
              onChange={onChangeMinValueHandler}
              label="Min value:"
              maxValue={maxValue}
              minValue={minValue}
              min={0}
              max={maxValue - 1}
              value={minValue}
            />
          </div>
          <Button
            type="submit"
            currentValue={currentValue}
            maxValue={maxValue}
            minValue={minValue}
            typeOfAction="submit"
          />
        </form>

        <div>
          <div>{currentValue}</div>
          <Button
            onClick={onClickHandler}
            currentValue={currentValue}
            maxValue={maxValue}
            minValue={minValue}
            typeOfAction="inc"
          />
          <Button
            onClick={onClickResetHandler}
            currentValue={currentValue}
            maxValue={maxValue}
            minValue={minValue}
            typeOfAction="reset"
          />
        </div>
      </div>
)
}