interface Weight {
    imperial: string,
    metric: string,
}

interface Breeds {
    weight: Weight,
    id: string,
    name: string,
    temperament: string,
    origin: string,
    country_code: string,
    description: string,
    life_span: string,
    wikipedia_url: string,

}

interface Card {
    id: string,
    url: string,
    breeds: Breeds[],
    width: string,
    height: string,
}


export interface cardState {
    currentCard: Card | null,
    loading: boolean,
    error: string | null,

}

export enum CardActionType {
    FETCH_CARD_REQUEST = 'FETCH_CARD_REQUEST',
    FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
    FETCH_CARD_FAILURE = 'FETCH_CARD_FAILURE'
}

interface FetchCardAction {
    type: CardActionType.FETCH_CARD_REQUEST
}

interface FetchCardSuccessAction {
    type: CardActionType.FETCH_CARD_SUCCESS,
    payload: Card
}

interface FetchCardErrorAction {
    type: CardActionType.FETCH_CARD_FAILURE,
    payload: string | null
}

export type CardAction = FetchCardAction
    | FetchCardSuccessAction
    | FetchCardErrorAction;