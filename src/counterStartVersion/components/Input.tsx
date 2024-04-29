import { ChangeEvent } from "react";

export type InputType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxValue: number;
  minValue: number;
  label: string;
  min?: number;
  max?: number;
  value: number;
};

export const Input = (props: InputType) => {
  return (
    <div>
      <label>
        {props.label}
        <input
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e)}
          value={props.value}
          min={props.min}
          max={props.max}
        />
      </label>
    </div>
  );
};
