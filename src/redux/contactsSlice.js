import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice ({
    name: 'contact',
    initialState: {
        contacts: [],
    },
    redusers: {
        addContact: {
            reducer(state, action){
                state.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                    contact,
                    id: nanoid(),
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action){
                const index = state.findIndex(contact => contact.id === action.payload);
                state.splice(index, 1);
            },

        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

