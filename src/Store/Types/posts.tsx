interface Breeds {
    adaptability: number,
    cfa_url: string,
    description: string,
    id: string,
    life_span: string,
    name: string,
    origin: string,
    temperament: string,
    vcahospitals_url: string,
    vetstreet_url: string,
    weight: {
        imperial: string,
        metric: string
    },
    wikipedia_url: string
}

interface Posts {
    breeds: Breeds[],
    id: string,
    url: string,
    width: number,
    height: number
}

export interface postsState {
    posts: Posts[],
    page: number,
    limit: number,
    loading: boolean,
    error: string | null,

}

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_PAGES = 'SET_PAGES',
    DELETE_POST = 'DELETE_POST',
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload: Posts[]
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR,
    payload: string,
}

interface SetPostsPage {
    type: PostsActionTypes.SET_PAGES,
    payload: number
}

interface DeletePostAction {
    type: PostsActionTypes.DELETE_POST;
    payload: string;
}

export type PostsAction = FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
    | SetPostsPage
    | DeletePostAction;

export interface ComponentProps {
    posts: Posts[];
    loading: boolean;
}
