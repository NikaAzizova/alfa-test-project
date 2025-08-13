 import { combineReducers } from "@reduxjs/toolkit";
 import { postsReducer } from "./postsReducer";
 import cardReducer from "./cardReducer";
 import favoriteReducer from './favoriteReducer'


 export const rootReducer = combineReducers({
    posts: postsReducer,
    card: cardReducer,
    favorites: favoriteReducer,
 })

 export type RootState = ReturnType<typeof rootReducer>