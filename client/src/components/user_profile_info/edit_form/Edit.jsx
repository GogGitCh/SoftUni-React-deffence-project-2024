import styles from './Edit.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Edit({ editController, oldUserInfoData, EditedDataTransporter }) {
    const [editedName, setEditedName] = useState(oldUserInfoData[0]);
    const [editedEmail, setEditedEmail] = useState(oldUserInfoData[1]);
    const [editedTelephone, setEditedTelephone] = useState(oldUserInfoData[2]);
    const [editedBio, setEditedBio] = useState(oldUserInfoData[3]);

    const onSaveClick = (newData) => {
        editController(true)
        EditedDataTransporter(newData);
    }


    return (
        <div className={styles['edit-wrapper']}>
            <div className={styles['edit-form']}>
                <label className={styles['label']}>
                    Name:
                    <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                </label>

                <label className={styles['label']}>
                    Email:
                    <input type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                </label>

                <label className={styles['label']}>
                    Telephone:
                    <input
                        type="tel"
                        value={editedTelephone}
                        onChange={(e) => setEditedTelephone(e.target.value)}
                        className={styles['input']}
                    />
                </label>

                <label className={styles['label']}>
                    Bio:
                    <input type="text" value={editedBio} onChange={(e) => setEditedBio(e.target.value)} />
                </label>
                <div className={styles['edit-buttons']}>
                    {/* <button className={styles.saveButton} onClick={handleSave}> */}
                    <button className={styles['save-button']}
                        onClick={() => onSaveClick([editedName,
                            editedEmail,
                            editedTelephone,
                            editedBio])}>
                        <FontAwesomeIcon icon={faCheck} /> Save
                    </button>
                    {/* <button className={styles.cancelButton} onClick={onCancel}> */}
                    <button className={styles['cancel-button']} onClick={() => editController(true)}>
                        <FontAwesomeIcon icon={faTimes} /> Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Edit
