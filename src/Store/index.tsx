 import { configureStore } from "@reduxjs/toolkit";
 import { rootReducer } from "./Reducers";

 export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware()
 });

 export type AppDispatch = typeof store.dispatch;