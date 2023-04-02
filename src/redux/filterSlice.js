import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    redusers: {
        setFilter: {
            reducer(state, action){
            state.filter = action.payload;
            },
        }
    }
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;