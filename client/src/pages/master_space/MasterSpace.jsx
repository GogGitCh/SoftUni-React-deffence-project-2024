import { useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './MasterSpace.module.css';
import PortfolioUploader from '../../components/portfolio_squares/PortfolioUploader';

const MasterSpace = () => {

    // Edit main user information
    const handleEditClick = () => {
        // Implement logic for opening the edit modal here
        console.log('Edit button clicked');
    };

    const handleImageUpload = () => {
    }


    return (
        <div className={styles['master-space']}>
            <div className={styles['business-card-container']}>
                <div className={styles['avatar-container']} onClick={handleImageUpload}>
                    <div className={styles['avatar-overlay']}>
                        <FontAwesomeIcon icon={faCamera} />
                    </div>
                    {/* Placeholder for the master's avatar */}
                    <img src="https://placekitten.com/100/100" alt="Master Avatar" />
                </div>

                <div className={styles['business-card']}>
                    <h2>John Doe</h2>
                    <p>Email: john.doe@example.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <button className={styles['edit-button']} onClick={handleEditClick}>

                <FontAwesomeIcon icon={faEdit} /> Edit
            </button>

            <PortfolioUploader />

        </div>
    );
};

export default MasterSpace;