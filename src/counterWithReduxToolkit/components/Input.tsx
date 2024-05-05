import { ChangeEvent } from "react";

export type InputType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  min?: number | undefined;
  max?: number | undefined;
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
