import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles['footer-wrapper']}>
            <p>Bringing Beauty and Inspiration to Your Decorative Projects
            © [Current Year] George Dimitrov. All rights reserved.</p>
        </div>
    );
}

export default Footer
