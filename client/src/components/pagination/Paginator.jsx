import styles from './Paginator.module.css'

function Paginator() {
    return (
        <div className={styles['pagination']}>
            <a href="#" className={styles['a']}>&laquo;</a>
            <a href="#" className={styles['a']}>1</a>
            <a href="#" className={`${styles['active']} ${styles['a']}`}>2</a>
            <a href="#" className={styles['a']}>3</a>
            <a href="#" className={styles['a']}>4</a>
            <a href="#" className={styles['a']}>5</a>
            <a href="#" className={styles['a']}>6</a>
            <a href="#" className={styles['a']}>&raquo;</a>
        </div>
    );
}

export default Paginator
