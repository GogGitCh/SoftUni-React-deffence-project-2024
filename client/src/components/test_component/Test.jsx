import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Test.module.css'



function Test() {
  const [imageSlots, setImageSlots] = useState([null, null, null, null, null]);

  const handleImageUpload = (e) => {
    console.log(`handleImageUpload`)
    const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    setImageSlots([...newImages, ...imageSlots.slice(newImages.length)]);

  }

  const handleImageEdit = (e, index) => {
    console.log(`handleImageEdit ${index}`)
    const imageToReplaceWith = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
    // setImageSlots([...imageToReplaceWith, ...imageSlots.slice(imageToReplaceWith.length)])
    // const newImagesArray = imageSlots.toSpliced(index, 1, imageToReplaceWith)
    const newImagesArray = [...imageSlots];
    newImagesArray.splice(index, 1, ...imageToReplaceWith);
    setImageSlots([...newImagesArray]);
  }

  // const EditSquareJSX = (image, index) => {
  //   return (
  //     <div
  //       key={index}
  //       className={styles['portfolio-image-square']}
  //     //      onClick={() => handleImageEdit(index)}

  //     >
  //       {image ? (
  //         <label htmlFor="fileInput">
  //           <FontAwesomeIcon icon={faEdit} className={styles['edit-icon']} />
  //           <input type="file" id='fileInput' accept="image/*" multiple onChange={(e) => handleImageEdit(e)} className={styles['file-input']} style={{ display: 'none' }} />
  //           <img className={styles['img']} src={image} alt={`Portfolio Image ${index + 1}`} />
  //         </label>

  //       ) : (
  //         <label htmlFor='fileInput'>
  //           <FontAwesomeIcon icon={faPlus} className={styles['add-icon']} />
  //           <input type="file" id='fileInput' accept="image/*" multiple onChange={(e) => handleImageUpload(e)} className={styles['file-input']} style={{ display: 'none' }} />
  //         </label>

  //       )}
  //     </div>
  //   );
  // };

  const imageUploadEditController = (imageSlots) => {
    // console.log(imageSlots);
    const stateArr = [];

    if (imageSlots.includes(null)) {
      imageSlots.map((image, index) => {
        if (image) {
          stateArr.push(EditSquareJSX(image, index));
        } else {
          stateArr.push(UploadSquareJSX(index));
        }
      })

    } else if (!imageSlots.includes(null)) {
      imageSlots.map((image, index) => {
        stateArr.push(EditSquareJSX(image, index));
      })
    } else {
      imageSlots.map(index => {
        UploadSquareJSX(index)
      })

    }

    return stateArr;

  }

  const UploadSquareJSX = (index) => {
    return (

      <div key={index} className={styles['portfolio-image-square']}>
        <label htmlFor='fileInput'>
          <FontAwesomeIcon icon={faPlus} className={styles['add-icon']} />
          <input type="file" id='fileInput' accept="image/*" multiple onChange={(e) => handleImageUpload(e)} className={styles['file-input']} style={{ display: 'none' }} />
        </label>
      </div>

    )
  }

  const EditSquareJSX = (image, index) => {
    console.log(`EditSquareJSX ${index}`)
    return (

      <div key={index} className={styles['portfolio-image-square']}>
        <label htmlFor="fileInput">
          <FontAwesomeIcon icon={faEdit} className={styles['edit-icon']} />
          <input type="file" id='fileInput' accept="image/*" multiple onChange={(e) => handleImageEdit(e , index)} className={styles['file-input']} style={{ display: 'none' }} />
          <img className={styles['img']} src={image} alt={`Portfolio Image ${index + 1}`} />
        </label>
      </div>
    );
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
          {/* {imageSlots.map((image, index) => EditSquareJSX(image, index))} */}
          {/* {imageSlots.map((image, index) => imageUploadEditController(image, index))} */}
          {imageUploadEditController(imageSlots)}


        </div>
      </div>
    </div>
  );
}

export default Test
