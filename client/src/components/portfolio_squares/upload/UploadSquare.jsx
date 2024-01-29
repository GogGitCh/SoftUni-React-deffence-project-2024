import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../SquareStyles.module.css'

// eslint-disable-next-line react/prop-types
function UploadSquare({index, imageUploadHandler}) {
    return (

        <div key={index} className={styles['portfolio-image-square']}>
            <label htmlFor={`fileInput-${index}`}>
                <FontAwesomeIcon icon={faPlus} className={styles['add-icon']} />
                <input type="file" id={`fileInput-${index}`} accept="image/*" onChange={(e) => imageUploadHandler(e, index)} className={styles['file-input']} style={{ display: 'none' }} />
            </label>
        </div>

    )
}

export default UploadSquare
