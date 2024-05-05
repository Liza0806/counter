export type StateDataType = {
    "currentValue": number,
    "maxValue": number,
    "minValue": number,
    "_id": string,
    "updatedAt": string
  } 

export type CounterStateType = {
    "data": StateDataType | [],
    "currentValue": number,
    "maxValue": number,
    "minValue": number,
    "error": boolean,
    "isLoading": boolean,
  }


export const counterState: CounterStateType = {
    "data": [],
    "currentValue": 0,
    "maxValue": 0,
    "minValue": 0,
    "error": false,
    "isLoading": false,
    
  }

