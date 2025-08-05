import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardById } from "../../Store/Actions/card";
import { RootState } from "../../Store";
import { AppDispatch } from "../../Store";
import styles from './CardItem.module.css'


const CardItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const cardData = useSelector((state: RootState) => state.card.currentCard);
    const loading = useSelector((state: RootState) => state.card.loading);
    const error = useSelector((state: RootState) => state.card.error);

    useEffect(() => {
        if (id) {
            dispatch(fetchCardById(id));
        }
    }, [id, dispatch])

    if (error) return <div>Ошибка: {error}</div>;
    if (!cardData) return null;



    return (
        <div className={styles.cardContainer}>
             {loading && (
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}></div>
                </div>
            )}
            <h3>Card Details</h3>
            <div className={styles.cardWrapper}>
                <div>
                    <img
                        className={styles.cardImage}
                        src={cardData.url}
                        alt="Изображение карточки по id" />
                </div>
                <div className={styles.cardInformation}>
                    {cardData.breeds.length > 0 && (
                        <div>
                            <div className={styles.text}><span className={styles.subtitle}>Breed name: </span>{cardData.breeds[0].name}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Width kg: </span>{cardData.width}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Height inch: </span>{cardData.height}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Temperament: </span>{cardData.breeds[0].temperament}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Origin: </span>{cardData.breeds[0].origin}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Country code: </span>{cardData.breeds[0].country_code}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Years of life: </span>{cardData.breeds[0].life_span}</div>
                            <div className={styles.text}><span className={styles.subtitle}>Wikipedia link: </span>
                                <a href={cardData.breeds[0].wikipedia_url}
                                    target="_blank"
                                >
                                    {cardData.breeds[0].wikipedia_url}
                                </a>
                            </div>
                            <p>Description: {cardData.breeds[0].description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardItem;