import styles from './CardPortfolio.module.css'
import Modal from '../../components/modal/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function CardPortfolio() {
    return (
        <>
        <Modal imageUrl={'/images/gallery/gallery_content/type_1_0.jpg'}/>
        
        <div className={styles['card-wrapper']}>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="https://www.surfaceform.com/newsite/wp-content/uploads/2018/05/petermark3-500x500.jpg" alt="" />
                <FontAwesomeIcon className={`${styles['icon']} ${styles['liked']}`} icon={faHeart} />
            </div>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="/images/gallery/gallery_content/type_1_0.jpg" alt="bri" />
                <FontAwesomeIcon className={styles['icon']} icon={faHeart} />
            </div>


            <div className={styles['img-frame']}>

                <img className={styles['img']} src="https://www.surfaceform.com/newsite/wp-content/uploads/2018/05/petermark3-500x500.jpg" alt="" />
            </div>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="/images/gallery/gallery_content/type_1_0.jpg" alt="bri" />

            </div>
            <div className={styles['img-frame']}>

                <img className={styles['img']} src="https://www.surfaceform.com/newsite/wp-content/uploads/2018/05/petermark3-500x500.jpg" alt="" />
            </div>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="/images/gallery/gallery_content/type_1_0.jpg" alt="bri" />

            </div>
            <div className={styles['img-frame']}>

                <img className={styles['img']} src="https://www.surfaceform.com/newsite/wp-content/uploads/2018/05/petermark3-500x500.jpg" alt="" />
            </div>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="/images/gallery/gallery_content/type_1_0.jpg" alt="bri" />

            </div>
            <div className={styles['img-frame']}>

                <img className={styles['img']} src="https://www.surfaceform.com/newsite/wp-content/uploads/2018/05/petermark3-500x500.jpg" alt="" />
            </div>
            <div className={styles['img-frame']}>
                <img className={styles['img']} src="/images/gallery/gallery_content/type_1_0.jpg" alt="bri" />

            </div>





        </div>
        </>
    );
}

export default CardPortfolio
