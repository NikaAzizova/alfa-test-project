import React from "react"
import styles from './Cards.module.css'
import { ComponentProps } from '../../Store/Types/posts'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deletePost } from "../../Store/Actions/posts"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../Store"



const Cards: React.FC<ComponentProps> = ({ posts, loading }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    console.log(posts);

    const [likedId, setLikedId] = useState<string>('')

    if (likedId) {
        console.log(likedId);
    }

    const handleClick = (id: string) => {
        // Переход на страницу деталей по ID
        navigate(`/image/${id}`);
    };

    const clickStopPropogation = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    } //при клике на сердечко чтобы не срабатывал код по переходу на другую страницу по id карточки

    function handleDelete(id: string) {
        dispatch(deletePost(id));

    }

    return (
        <div className={styles.posts}>
            {loading && (
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}></div>
                </div>
            )}
            <div className={styles.postWrapper}>
                {posts.map(post =>
                    <div onClick={() => handleClick(post.id)}
                        className={styles.post} key={post.id}
                    >
                        <div
                            className={styles.crossWrapper}
                        >
                            <img
                                onClick={(event) => {
                                    handleDelete(post.id);
                                    clickStopPropogation(event)
                                }}
                                width="25"
                                height="25"
                                src="https://img.icons8.com/emoji/48/cross-mark-button-emoji.png"
                                alt="cross-mark-button-emoji"

                            />
                        </div>
                        <div className={styles.imgWrapper}>
                            <img
                                src={post.url}
                                alt="photo"
                                className={styles.image} />
                        </div>


                        <div>{post.breeds.map(breed =>
                            <div
                                className={styles.descriptionWrapper}
                                key={breed.id}>
                                <div>
                                    <span className={styles.subtitle}>Name: </span>
                                    {breed.name}
                                </div>
                                <div>
                                    <span className={styles.subtitle}>Origin: </span>
                                    {breed.origin}
                                </div>
                                <div>
                                    <span className={styles.subtitle}>Adaptability: </span>
                                    {breed.adaptability}
                                </div>
                                <div className={styles.descr_wrapper}>
                                    <div>
                                        <span className={styles.subtitle}>Description: </span>
                                        {breed.description}
                                    </div>
                                </div>
                            </div>
                        )}</div>
                        <div

                            className={styles.likesWrapper}>
                            <div
                                onClick={(event) => {
                                    setLikedId(post.id);
                                    clickStopPropogation(event)


                                }
                                }
                            >
                                {post.id === likedId ? <img
                                    className={styles.whiteHeartImg}
                                    src="/assets/images/red_heart.png" alt="red heart" /> :
                                    <img
                                        className={styles.whiteHeartImg}
                                        src="/assets/images/white_heart.png" alt="white heart" />
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards;