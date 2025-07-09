import styles from './ErrorPage.module.css';

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.subWrapper}>
                    <div className={styles.title}>404</div>
                    <div className={styles.text}>Oops...page not found</div>
                    <div className={styles.subtext}>We don't know how you ended up here, but you should go away now.</div>
                </div>
            </div>
        </div>
    )
}