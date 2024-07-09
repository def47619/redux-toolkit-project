import { createSlice } from "@reduxjs/toolkit";

const initialState1 = [
  { id: '1', name: "Amanda", email: "amanda@mail.com" },
  { id: '2', name: "john", email: "john@mail.com" },
];

const initialState2 = {
  startDate: "2024-07-01", 
  endDate: "2024-07-03"
};

const userSlice = createSlice({
  name: "users", 
  initialState: initialState1
});

const dateSlice = createSlice({
  name: "dates", 
  initialState: initialState2
});

export const initialStateUsers = initialState1;
export const initialStateDates = initialState2;
export const usersReducer = userSlice.reducer;
export const datesReducer = dateSlice.reducer;