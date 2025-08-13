import React from "react"
import styles from './Cards.module.css'
import { ComponentProps } from '../../Store/Types/posts'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deletePost } from "../../Store/Actions/posts"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../Store"
import { toggleFavorite } from "../../Store/Reducers/favoriteReducer"
import { RootState } from "../../Store/Reducers"



const Cards: React.FC<ComponentProps> = ({ posts, loading }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const FavoritesIDs = useSelector((state: RootState) => state.favorites.favorites);
    const [chosen, setChosen] = useState<boolean>(false);

    console.log(posts);

    const handleClick = (id: string) => {
        navigate(`/image/${id}`);
    };

    const clickStopPropogation = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        console.log(FavoritesIDs);

    }


    function handleDelete(id: string) {
        dispatch(deletePost(id));

    }

    function handleChosen() {
        setChosen(true);
    }

    function handleBackToAllCards() {
        setChosen(false);
    }

    if (!FavoritesIDs) {
        <div>Данных нет</div>
    }


    return (
        <div className={styles.posts}>

            <div
                className={styles.chosenBtnContainer}>
                {chosen ? (<div className={styles.choosenBtnWrapper}>
                    <button
                        onClick={handleBackToAllCards}
                        className={styles.chosenBtn}>
                        Back to All Cards
                    </button>
                </div>) : (
                    <div className={styles.choosenBtnWrapper}>
                        <button
                            className={styles.chosenBtn}
                            onClick={handleChosen}>
                            Избранное
                        </button>
                    </div>
                )}
            </div>
            
            {loading && (
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}></div>
                </div>
            )}

            <div className={styles.postWrapper}>
                {chosen ? (
                    posts.filter(item => FavoritesIDs.includes(item.id)).map(post => (
                        <div key={post.id}>{
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
                                    </div>
                                )}</div>

                                <div
                                    className={styles.likesWrapper}>
                                    <div
                                        onClick={(event) => {
                                            clickStopPropogation(event);
                                            dispatch(toggleFavorite(post.id));


                                        }
                                        }
                                    >
                                        {FavoritesIDs.includes(post.id) ?

                                            <img
                                                className={styles.whiteHeartImg}
                                                src="/assets/images/red_heart.png" alt="red heart" />
                                            :
                                            <img
                                                className={styles.whiteHeartImg}
                                                src="/assets/images/white_heart.png" alt="white heart" />
                                        }
                                    </div>
                                </div>
                            </div>

                        }</div>
                    ))
                )
                    : (
                        posts.map(post =>
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
                                            clickStopPropogation(event);
                                            dispatch(toggleFavorite(post.id));


                                        }
                                        }
                                    >
                                        {FavoritesIDs.includes(post.id) ?

                                            <img
                                                className={styles.whiteHeartImg}
                                                src="/assets/images/red_heart.png" alt="red heart" />
                                            :
                                            <img
                                                className={styles.whiteHeartImg}
                                                src="/assets/images/white_heart.png" alt="white heart" />
                                        }
                                    </div>
                                </div>
                            </div>
                        )

                    )
                }

            </div>
        </div>
    )
}

export default Cards;

{/*post.id === likedId ?*/ }

{/*
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
                                    <div>
                                    </div>
                                </div>
                            </div>
    
    */}