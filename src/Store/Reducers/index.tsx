 import { combineReducers } from "@reduxjs/toolkit";
 import { postsReducer } from "./postsReducer";

 export const rootReducer = combineReducers({
    posts: postsReducer,
 })

 export type RootState = ReturnType<typeof rootReducer>