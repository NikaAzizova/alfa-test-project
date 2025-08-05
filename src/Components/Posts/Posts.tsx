import React from "react";
import { postsTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { fetchPosts } from "../../Store/Actions/posts";
import { useEffect } from "react";
import Cards from "../Cards/Cards";
import { setPostsPage } from "../../Store/Actions/posts";
import styles from './Posts.module.css'





const Posts: React.FC = () => {

    const { posts, loading, error, page } = postsTypedSelector(state => state.posts);

    const dispatch = useDispatch<AppDispatch>();
    const pageNums: number[] = [];

    useEffect(() => {
        dispatch(fetchPosts(page))
    }, [dispatch, page])

    if (error) {
        <div>Произошла ошибка загрузки пользователей: {error}</div>
    }

    for (let i = 1; i <= 10; i++) {
        pageNums.push(i)
    }

    function pageNumberHandleClick(num: number) {
        dispatch(setPostsPage(num));
    }

    return (
        <div>
            <div className={styles.wrapper}>
                {pageNums.map((num) => {
                    return <div
                        key={num}
                        className={styles.pageNumWrapper}
                        onClick={() => pageNumberHandleClick(num)}
                    >
                        <div>
                            <div>{num}</div>
                        </div>
                    </div>
                })}
            </div>
            <Cards posts={posts} loading={loading} />
        </div>
    )
}

export default Posts;