//import './Products.css'
import Posts from '../../Components/Posts/Posts'
import styles from './Products.module.css'
import { useNavigate } from 'react-router-dom'


export default function Products() {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.btnWrapper}>
            <button
                onClick={() => navigate('/')}
                className={styles.btn}>Home page</button>
               </div>
            <div className={styles.title}>
                <h1>All Cards</h1>
            </div>
            <Posts />
        </div>
    )
}