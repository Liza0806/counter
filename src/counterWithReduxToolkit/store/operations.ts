import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api";
import { StateDataType } from "./counterState";


export const fetchCounter = createAsyncThunk<StateDataType, void, { rejectValue: Error }>(
    'counter/fetchCounter',
    async (_, thunkAPI) => {
      try {
        const response = await API.getCounterValues();
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error as Error);
      }
    }
  );