import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles['main-wrapper']}>
            <div className={styles['home-wrapper']}>
                <h1 className={styles['hero-h1']}>Welcome to Plaster-Masters</h1>
                <h2 className={styles['hero-h2']}>Your Source for Decorative Plasters <br /> Ideas And Solutions</h2>
            </div>
            <div className={styles['home-wrapper-2']}>
                <p className={styles['hero-p']}>This platform is dedicated to the artistry of decorative plasters.
                    Whether you're an artist showcasing your portfolio or a design enthusiast exploring
                    the possibilities, we're here to inspire and connect.</p>
            </div>
            <div className={styles['home-wrapper-3']}></div>
            <div className={styles['home-wrapper-4']}>
                <button className={styles['btn-primary']}>Enter Gallery</button>
            </div>
        </div>

    );
}

export default Home
