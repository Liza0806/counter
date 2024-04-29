import { TextField } from "@mui/material";
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
      <TextField id="outlined-basic" label= {props.label} variant="outlined"  type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e)}
          value={props.value}
          min={(props.min)?.toString()}
          max={props.max}/>
      
    </div>
  );
};
