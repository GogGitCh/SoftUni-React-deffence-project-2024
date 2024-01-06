import styles from './Header.module.css'
import logo from '../../assets/svg/cyberscooty-trowel.svg'

function Header() {
    return (
        <div>
            <nav>
                <img src={logo} alt="logo" className={styles['logo']}/>
                
            </nav>
        </div>
    );
}

export default Header
