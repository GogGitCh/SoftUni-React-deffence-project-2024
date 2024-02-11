import { useState } from 'react';
import styles from './UserInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function UserInfo({ editController, UserInfoDataHandler, newUserInfoData }) {
    const [avatar, setAvatar] = useState('images/placeholders/Avatar.png')
    const [userName, setUsername] = useState('User Name');
    const [email, setEmail] = useState('userName@gmail.com');
    const [phone, setPhone] = useState('+359 456 7890');
    const [bio, setBio] = useState('Describe yourself in a fiew short lines!');


    console.log(typeof newUserInfoData);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (newUserInfoData.length > 0) {
            setUsername(newUserInfoData[0]);
            setEmail(newUserInfoData[1]);
            setPhone(newUserInfoData[2]);
            setBio(newUserInfoData[3]);
            
            console.log(newUserInfoData);
        }
    }, [newUserInfoData])

    const handleEditClick = () => {
        editController(false);
        UserInfoDataHandler([userName, email, phone, bio]);
    };

    const handleImageUpload = (e) => {
        const image = URL.createObjectURL(e.target.files[0])
        setAvatar(image);
    }


    // const newUserInfoDataSetter = () => {
    //     setUsername(newUserInfoData[0]);
    //     setEmail(newUserInfoData[1]);
    //     setPhone(newUserInfoData[2]);
    //     setBio(newUserInfoData[3]);
    // }

    return (
        <div className={styles['master-space']}>


            <div className={styles['business-card-container']}>
                <div className={styles['avatar-container']}>
                    <label htmlFor='avatarInput' className={styles['avatar-overlay']}>
                        <FontAwesomeIcon icon={faCamera} />
                        <input id='avatarInput' type='file' accept='image/*' style={{ display: 'none' }} className={styles['avatar-input']} onChange={(e) => handleImageUpload(e)} />
                    </label>
                    <img className={styles['img']} src={avatar} alt="Master Avatar" />
                </div>

                {/* <div className={styles['business-card']} onClick={newUserInfoDataSetter}> */}
                <div className={styles['business-card']}>
                    <h2>{userName}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{bio}</p>
                </div>
            </div>
            <button className={styles['edit-button']} onClick={handleEditClick} >
                <FontAwesomeIcon icon={faEdit} /> Edit
            </button>

        </div>
    );
}

export default UserInfo
