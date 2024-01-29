import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import styles from '../SquareStyles.module.css';

// eslint-disable-next-line react/prop-types
function EditSquare({image, index, imageEditHandler}) {
    return (

        <div key={index} className={styles['portfolio-image-square']}>
          <label htmlFor={`fileInput-${index}`}>
            <FontAwesomeIcon icon={faEdit} className={styles['edit-icon']} />
            <input type="file" id={`fileInput-${index}`} accept="image/*" onChange={(e) => imageEditHandler(e, index)} className={styles['file-input']} style={{ display: 'none' }} />
            <img className={styles['img']} src={image} alt={`Portfolio Image ${index + 1}`} />
          </label>
        </div>
      )
}

export default EditSquare
