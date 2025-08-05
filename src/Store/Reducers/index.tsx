 import { combineReducers } from "@reduxjs/toolkit";
 import { postsReducer } from "./postsReducer";
 import cardReducer from "./cardReducer";

 export const rootReducer = combineReducers({
    posts: postsReducer,
    card: cardReducer
 })

 export type RootState = ReturnType<typeof rootReducer>