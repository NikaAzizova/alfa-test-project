import { newPostType } from "./form"

interface Breeds {
    adaptability: string,
    description: string,
    id: string,
    name: string,
    origin: string,
}

interface Posts {
    breeds: Breeds[],
    id: string,
    url: string,
    width: number,
    height: number,
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
    ADD_POST = 'ADD_POST',
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

export interface AddPostAction {
    type: PostsActionTypes.ADD_POST;
    payload: newPostType;
}

export type PostsAction = FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
    | SetPostsPage
    | DeletePostAction
    | AddPostAction;

export interface ComponentProps {
    posts: Posts[];
    loading: boolean;
}
