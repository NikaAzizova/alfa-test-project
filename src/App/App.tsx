import styles from './App.module.css'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import CreateProduct from '../Pages/CreateProduct/CreateProduct';
import Header from '../Components/Header/Header';
import Products from '../Pages/Products/Products';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

function App() {


    return (
        <div className={styles.container}>
            <Header />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/createProduct' element={<CreateProduct />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App