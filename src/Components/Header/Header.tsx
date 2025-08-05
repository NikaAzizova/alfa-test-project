import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <nav className={styles.navigation}>
                    <NavLink className={styles.link} to='/products'>All CARDS</NavLink>
                    <NavLink className={styles.link} to='/createProduct'>CREATE A CARD</NavLink>
                </nav>
            </div>
        </div>
    )
}