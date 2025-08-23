import styles from './Home.module.css'


const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.upperDetails}>
                Для данного сайта был использован публичный API c данного сайта:
                <div>
                    <a href='https://thecatapi.com/' target='_blank'>https://thecatapi.com/</a>
                </div>
            </div>
            <article>
                <h2 className={styles.title}>About cats</h2>
                <div className={styles.textContainer}>
                    <div className={styles.textWrapper}>
                        <div className={styles.text}>A cat is a domestic animal, one of the most popular (along with dogs) "companion animals" or pets. Cats are mammals and carnivores.</div>
                        <div className={styles.text}>Cats have been valued for their ability to kill rodents for about 10,000 years. A solitary hunter of rodents and other small animals, the cat is a social animal that uses a wide range of sound signals, as well as pheromones and body movements, to communicate.</div>
                        <div className={styles.text}>There are currently about 600 million domestic cats in the world, about 256 breeds have been developed, from long-haired (Persian cat) to hairless (Sphynx), recognized and registered by various felinological organizations. The very first breed of cats appeared in Egypt. Cats are widespread throughout the world.</div>
                    </div>
                </div>
            </article>
            <div className={styles.bottonDetails}>
                <div>Разработчик данного сайта: Азизова Вероника</div>
                <div>
                    <a
                        href='https://github.com/NikaAzizova'
                        target='_blank'
                    >https://github.com/NikaAzizova
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Home;