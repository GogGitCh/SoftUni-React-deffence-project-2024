import styles from './ContactWith.module.css';

const ContactWith = () => {

  return (
    <div className={styles['modal-overlay']} >
      <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
        <button className={styles['close-button']}>
          &times;
        </button>
        <div className={styles['modal-header']}>
          <h2 className={styles['h2']}>User Information</h2>
        </div>
        <div className={styles['modal-body']}>
          <p>
            <strong>Drago Drogicha</strong>
          </p>
          <p>
            <strong>dragodroga420@abv.bg</strong>
          </p>
          <p>
            <strong>088 555 654</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactWith;
