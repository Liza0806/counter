import { useEffect, useState } from "react"

export type ButtonType = {
    type?: "button" | "submit" | "reset" 
    typeOfAction: string
    onClick?: ()=>void
   // onSubmit?: (e: any)=>void
    currentValue: number
    maxValue: number
    minValue: number
}

export const Button = ( props: ButtonType) => {
   const [disabled, setDisabled] = useState(true)
   useEffect(() => {
    switch(props.typeOfAction){
        case "inc": 
            setDisabled(props.currentValue >= props.maxValue);
            break;
            case "set":
                setDisabled(props.maxValue <= props.minValue);
                break;
        default:
            setDisabled(false);
            break;
    }
}, [props.currentValue, props.maxValue, props.minValue, props.typeOfAction]);
    return (
        <button
        type={props.type ||'button'}
        onClick={props.onClick}
        disabled={disabled}
      >
    {props.typeOfAction}
      </button>
    )
}