import React from "react";
import { postsTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { fetchPosts } from "../../Store/Actions/posts";
import { useEffect } from "react";

import styles from './Posts.module.css'
//import { setPostsPage } from "../../Store/Actions/posts";



const Posts: React.FC = () => {
   const { posts, loading, error, page } = postsTypedSelector(state => state.posts);
    console.log(posts, loading, error, page);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

   

    if (loading) {
        <div>Идет загрузка...</div>
    }

    if (error) {
        <div>Произошла ошибка загрузки пользователей: {error}</div>
    }

    return (
        <div>
            <h3>Posts</h3>
             <div className={styles.posts}>{posts.map(post =>
                <div key={post.id} className={styles.post}>
                    <img className={styles.image} src={post.url} alt="photo" />
                    <div>{post.breeds.map(breed =>
                        <div key={breed.id}>
                            <div >Name: {breed.name}</div>
                            <div>Origin: {breed.origin}</div>
                            <div>Adaptability:  {breed.adaptability}</div>
                            <div className={styles.descr_wrapper}>
                                <div>Description: {breed.description}</div>
                            </div>
                        </div>
                    )}</div>
                    <button className={styles.btn} >Подробнее</button>
                    <button className={styles.btn} >Редактировать</button>
                    <button className={styles.btn}>Удалить</button>

                </div>
                
            )}</div>
        </div>
    )
}

export default Posts;