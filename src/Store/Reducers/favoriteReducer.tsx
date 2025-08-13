 import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FavoritesState {
    favorites: string[];
}

const initialState: FavoritesState = {
    favorites: [],
}

const favoriteReducer = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<string>) {
            const id = action.payload;
            if (state.favorites.includes(id)) {
                state.favorites = state.favorites.filter(fid => fid !== id);
            } else {
                state.favorites.push(id);
            }
        },
    },
});

export const {toggleFavorite}= favoriteReducer.actions;
export default favoriteReducer.reducer;
