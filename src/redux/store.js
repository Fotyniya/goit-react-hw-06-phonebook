import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { filterSlice } from "./filterSlice";
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReduser = persistReducer( persistConfig, contactsReducer );

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReduser,
        filterQuery: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),  
});

export const persistor = persistStore(store);