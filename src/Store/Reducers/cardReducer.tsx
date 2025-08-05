import {
    cardState,
    CardAction,
    CardActionType
}
    from "../Types/cards";

const initialState: cardState = {
    currentCard: null,
    loading: false,
    error: null
}

const cardReducer = (state = initialState, action: CardAction): cardState => {
    switch (action.type) {
        case CardActionType.FETCH_CARD_REQUEST:
            return { ...state, loading: true, error: null };
        case CardActionType.FETCH_CARD_SUCCESS:
            return { ...state, loading: false, currentCard: action.payload };
        case CardActionType.FETCH_CARD_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

export default cardReducer;