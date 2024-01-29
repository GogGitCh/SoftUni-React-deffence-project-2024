import { useState } from 'react';
import styles from './PortfolioUploader.module.css'
import UploadSquare from './upload/UploadSquare'
import EditSquare from './edit/EditSquare';


function PortfolioUploader() {
    const [imageSlots, setImageSlots] = useState([null, null, null, null, null]);

    const imageUploadHandler = (e, index) => {
        console.log(`imageUploadHandler`)
        const newImage = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setImageSlots([...imageSlots.slice(0, index), ...newImage, ...imageSlots.slice(index + 1)]);
    }

    const imageEditHandler = (e, index) => {

        console.log(`imageEditHandler ${index}`)
        const newImage = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setImageSlots([...imageSlots.slice(0, index), ...newImage, ...imageSlots.slice(index + 1)]);
    }

    const actionController = () => {
        const stateArr = [];

        imageSlots.map((image, index) => {
            if (image) {
                stateArr.push(<EditSquare image={image} index={index} imageEditHandler={imageEditHandler} key={index} />);
                console.log(`trigg`);
            } else {
                stateArr.push(<UploadSquare index={index} imageUploadHandler={imageUploadHandler} key={index} />);
            }
        })

        return stateArr;
    }


    return (
        <div className={styles['master-space']}>
            <p className={styles['portfolio-explanation']}>
                Here you can upload five images that represent your portfolio.
            </p>
            <p className={styles['p']}>
                The more diverse the better!
            </p>
            <div className={styles['portfolio-section']}>
                <div className={styles['portfolio-images-wrapper']}>
                    {actionController(imageSlots)}
                </div>
            </div>
        </div>
    );
}

export default PortfolioUploader
