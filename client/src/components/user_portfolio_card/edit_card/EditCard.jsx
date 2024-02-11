import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './EditCard.module.css';

const EditCard = () => {
    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="https://www.surfaceform.com/newsite/wp-content/uploads/2018/05/petermark3-500x500.jpg" alt="" />
                <div className={styles['backdrop']}></div>
                <div className={styles['del-icon-wrapper']}>
                    <FontAwesomeIcon className={styles['del-icon']} icon={faTrash} />
                </div>
            </div>
        </div>
    );
};

export default EditCard;
