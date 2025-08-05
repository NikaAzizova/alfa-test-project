import { postsState } from "../Types/posts"
import { PostsAction } from "../Types/posts"
import { PostsActionTypes } from "../Types/posts"

const initialState: postsState = {
    posts: [],
    page: 1,
    limit: 10,
    loading: false,
    error: null
}

export const postsReducer = (state = initialState, action: PostsAction): postsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return { ...state, loading: true }
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload }
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case PostsActionTypes.SET_PAGES:
            return { ...state, page: action.payload }
        case PostsActionTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        default:
            return state
    }
}