import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import logo from '../../assets/svg/cyberscooty-trowel.svg'

function Header() {
    return (
        <nav className={styles['nav-wrap']}>
            <div className={styles['logo-wrap']}>
            <Link>
                    <h1 className={`${styles['logo-text-1']} ${styles['link']}`}>Plasters</h1>
            </Link>
                <Link>
                    <img src={logo} alt="logo" className={styles['logo']} />
                </Link>
                <Link>
                    <h1 className={`${styles['logo-text-2']} ${styles['link']}`}>Masters</h1>
                </Link>
            </div>

            <div className={styles['page-link-wrap']}>
                <Link to="/" className={styles['link']}>Gallery</Link>
            </div>

            <div className={styles['user-link-wrap']}>
                <div>
                    <Link to="/" className={styles['link']}>Register</Link>

                </div>
                <div>
                    <Link to="/" className={styles['link']}>Log in</Link>

                </div>
                <div>
                    <Link to="/" className={styles['link']}>Log out</Link>

                </div>

            </div>
        </nav>
    );
}

export default Header
