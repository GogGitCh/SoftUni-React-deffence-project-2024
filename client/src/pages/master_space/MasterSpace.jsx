import { useState } from 'react';
import styles from './MasterSpace.module.css'

import PortfolioUploader from '../../components/portfolio_squares/PortfolioUploader';
import UploadCard from '../../components/user_portfolio_card/upload_card/UploadCard';
import Edit from '../../components/user_profile_info/edit_form/Edit';
import UserInfo from '../../components/user_profile_info/UserInfo';
import EditCard from '../../components/user_portfolio_card/edit_card/EditCard';


const MasterSpace = () => {
    const [edit, setEdit] = useState(true);
    const [oldUserInfoData, setOldUserInfoData] = useState([]);
    const [newUserInfoData, setNewUserInfoData] = useState([]);

    const editController = (boolean) => {
        setEdit(boolean);
    }

    const UserInfoDataHandler = (formData) => {
        setOldUserInfoData(formData)
    }

    const EditedDataTransporter = (formData) => {
        setNewUserInfoData(formData);
    }

    return (
        <div className={styles['master-space-wrapper']}>
            {edit ? <UserInfo editController={editController} UserInfoDataHandler={UserInfoDataHandler} newUserInfoData={newUserInfoData} /> :
                <Edit editController={editController} oldUserInfoData={oldUserInfoData} EditedDataTransporter={EditedDataTransporter} />}

            <div className={styles['main-five-img']}>
                <PortfolioUploader />

            </div>

            <div className={styles['more-portfolio']}>
                <p className={styles['portfolio-explanation']}>Upload some more if you want to shine brighter.</p>
                <p className={styles['p']}>Here you have no limitations!</p>
                <UploadCard />
                <EditCard />

            </div>
        </div>

    );
};

export default MasterSpace;