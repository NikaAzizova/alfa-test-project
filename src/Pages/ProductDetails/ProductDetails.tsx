import styles from './ProductDetails.module.css';
import { useNavigate } from "react-router-dom";
import CardItem from '../../Components/CardItem/CardItem';

export default function ProductDetails() {
    const navigate = useNavigate();


    return (
        <div
            className={styles.container}
        >
            <div className={styles.btnWrapper}>
            <button
                className={styles.btn}
                onClick={() => navigate('/products')}>
                BACK...
            </button>
            </div>
            <CardItem />
        </div>
    )
}