import { Dispatch } from "@reduxjs/toolkit";
import { CardAction, CardActionType } from "../Types/cards";

export const fetchCardById = (id: string) => async (dispatch: Dispatch<CardAction>) => {
    dispatch({ type: CardActionType.FETCH_CARD_REQUEST });

    try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    //https://api.thecatapi.com/v1/images/L7z8fLkoJ
    const data = await response.json()

    dispatch({type: CardActionType.FETCH_CARD_SUCCESS, payload: data})
    }
    catch (error) {
        dispatch({type: CardActionType.FETCH_CARD_FAILURE,
        payload: 'Произошла ошибка при загрузке карточки по id: ' + error})
    }
};
