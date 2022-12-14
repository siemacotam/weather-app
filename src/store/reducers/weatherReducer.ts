import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Response } from "src/global";
import type { RootState } from "../store";

interface WeatherState {
  citiesData: Response[];
  searchedData: Response | null;
}

const initialState: WeatherState = {
  citiesData: [],
  searchedData: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearchedData: (state, action: PayloadAction<Response>) => {
      state.searchedData = action.payload;
    },
    setCitiesData: (state, action: PayloadAction<Response[]>) => {
      state.citiesData = action.payload;
    },
  },
});

export const { setSearchedData, setCitiesData } = weatherSlice.actions;

export const selectCount = (state: RootState) => state.weather;

export default weatherSlice.reducer;
