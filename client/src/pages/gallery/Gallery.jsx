import styles from './Gallery.module.css'
import {Link} from 'react-router-dom'

function Gallery() {
    return (
        <div className={styles['main-wrapper']}>
            <div className={styles['card']}>

                <div className={styles['user']}>
                    <img className={styles['profile-img']} src="../../../public/images/infogram_cards/Image1_1.jpg" alt="profile image" />
                    <div className={styles['user-names']}>
                        <p className={styles['first-name']}><i>George</i></p>
                        <p className={styles['family-name']}><i>Dimitrov</i></p>
                    </div>
                    <div className={styles['portfolio-link']}>
                        <Link className={styles['user-portfolio']} to="/portfolio">Users Portfolio</Link>
                    </div>
                </div>


                <div className={styles['accordian']}>
                    <ul className={styles['ul']}>
                        <li className={styles['li']}>
                            <div className={styles['image_title']}>
                                <a className={styles['a']} href="#">KungFu Panda</a>
                            </div>
                            <a className={styles['a']} href="#">
                                <img className={styles['accordian-img']} src="https://picsum.photos/530/290/?random=1" />
                            </a>
                        </li>
                        <li className={styles['li']}>
                            <div className={styles['image_title']}>
                                <a className={styles['a']} href="#">Toy Story 2</a>
                            </div>
                            <a className={styles['a']} href="#">
                                <img className={styles['accordian-img']} src="https://picsum.photos/530/290" />
                            </a>
                        </li>
                        <li className={styles['li']}>
                            <div className={styles['image_title']}>
                                <a className={styles['a']} href="#">Wall-E</a>
                            </div>
                            <a className={styles['a']} href="#">
                                <img className={styles['accordian-img']} src="https://picsum.photos/530/290/?random=1" />
                            </a>
                        </li>
                        <li className={styles['li']}>
                            <div className={styles['image_title']}>
                                <a className={styles['a']} href="#">Up</a>
                            </div>
                            <a className={styles['a']} href="#">
                                <img className={styles['accordian-img']} src="https://picsum.photos/530/290?random=1" />
                            </a>
                        </li>
                        <li className={styles['li']}>
                            <div className={styles['image_title']}>
                                <a className={styles['a']} href="#">Cars 2</a>
                            </div>
                            <a className={styles['a']} href="#">
                                <img className={styles['accordian-img']} src="https://picsum.photos/530/290/" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Gallery
