import React from "react";
import Form from "../../Components/Form/Form"
import styles from './CreateProduct.module.css'
import { useNavigate } from 'react-router-dom'

const CreateProduct: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.prodContainer}>
            <div className={styles.btnWrapper}>
                <button
                    onClick={() => navigate('/')}
                    className={styles.btn}>
                    Home page
                </button>
            </div>
            <div className={styles.formWrapper}>
                <Form />
            </div>
        </div>
    )
}

export default CreateProduct;