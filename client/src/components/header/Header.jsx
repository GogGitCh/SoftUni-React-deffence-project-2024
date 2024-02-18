import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import logo from '/svg/cyberscooty-trowel.svg'

function Header() {
    return (
        <nav className={styles['nav-wrap']}>
            <div className={styles['logo-wrap']}>
                <Link to={'/'}>
                    <h1 className={`${styles['logo-text-1']} ${styles['link']}`}>Plasters</h1>
                </Link>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className={styles['logo']} />
                </Link >
                <Link to={'/'}>
                    <h1 className={`${styles['logo-text-2']} ${styles['link']}`}>Masters</h1>
                </Link>
            </div>

            <div className={styles['page-link-wrap']}>
                <Link to="/gallery" className={styles['link']}>Gallery</Link>
            </div>

            <div className={styles['user-link-wrap']}>
                <div>
                    <Link to="/register" className={styles['link']}>Register</Link>

                </div>
                <div>
                    <Link to="/login" className={styles['link']}>Log in</Link>

                </div>
                <div>
                    <Link to="/logout" className={styles['link']}>Log out</Link>

                </div>

            </div>
        </nav>
    );
}

export default Header
