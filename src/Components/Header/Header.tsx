import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <nav className={styles.navigation}>
                    <NavLink className={styles.link} to='/'>Все продукты</NavLink>
                    <NavLink className={styles.link} to='/createProduct'>Создать продукт</NavLink>
                </nav>
            </div>
        </div>
    )
}