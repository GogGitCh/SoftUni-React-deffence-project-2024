import React, { useState } from 'react';
import styles from './Modal.module.css'

const Modal = ({ imageUrl, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);
    // const [isOpen, setIsOpen] = useState(false);
    

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        // <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className={`${styles['modal']} ${isOpen ? styles['open'] : ''}`}>
            <div className={styles['modal-content']}>
                <img className={styles['img']} src={imageUrl} alt="Modal Image" />
                <button className={styles['close-button']} onClick={closeModal}>
                    X
                </button>
            </div>
            <div className={styles['modal-backdrop']} onClick={closeModal}></div>
        </div>
    );
};

export default Modal;
