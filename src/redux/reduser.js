import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";

const initialState = {
    contacts: [],
    filter: '',
};

export const contactReducer = createReducer(initialState.contacts, {
    [addContact]: (state, action) => {
        state.push(action.payload);
      },
    [deleteContact]: (state, action) =>{
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
});

export const filterReducer = createReducer(initialState.filter, {
    [setFilter]: (state, action) => {
        state.status = action.payload;
      },
});