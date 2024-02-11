import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './UploadCard.module.css';

const UploadCard = () => {
    return (
        <div className={styles['card-wrapper']}>
            <div className={styles['img-frame']}>
                <label htmlFor="fileInput" className={styles['upload-label']}>
                    <input type="file" id="fileInput" accept="image/*" className={styles['file-input']} style={{ display: 'none' }} />
                </label>
                <div className={styles['backdrop']}></div>
                <div className={styles['edit-icon-wrapper']}>
                    <FontAwesomeIcon className={styles['add-icon']} icon={faPlus} />
                </div>
            </div>
        </div>
    );
};

export default UploadCard;
