import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contact/addContact", contact => {
    return {
      payload: {
        contact,
        id: nanoid(),
      },
    };
  });

export const deleteContact = createAction("contact/deleteContact");

export const setFilter = createAction("filter/setFilter");