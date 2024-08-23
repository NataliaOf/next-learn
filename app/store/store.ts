'use client';

import { configureStore } from "@reduxjs/toolkit";
import basketSlise from "./basketSlise";

 const store = configureStore({
   reducer:{
      basket: basketSlise,
   }
})

export { store};

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;