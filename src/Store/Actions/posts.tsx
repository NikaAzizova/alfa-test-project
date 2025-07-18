import { Dispatch } from "@reduxjs/toolkit";
import { PostsAction, PostsActionTypes } from "../Types/posts";


export const fetchPosts = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch({ type: PostsActionTypes.FETCH_POSTS })
           const headers = new Headers({
                "Content-Type": "application/json",
                "x-api-key": "DEMO-API-KEY"
            });

            const requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow' as RequestRedirect,
            };
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=${page}&limit=${limit}`, requestOptions);
            const data = await response.json();
            console.log(data);
           
           dispatch({
            type: PostsActionTypes.FETCH_POSTS_SUCCESS,
            payload: data,
           })
           
        }
        catch (error) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке постов: ' + error
            })
            console.log(error);
            
          
            
        }
    }
}

export function setPostsPage(page: number):PostsAction {
return {type: PostsActionTypes.SET_PAGES,
    payload: page,
}
}