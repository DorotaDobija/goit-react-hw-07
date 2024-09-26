import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    name: ""
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
       changeFilters(state, action) {
            state.name = action.payload
       }
    }
})  

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;