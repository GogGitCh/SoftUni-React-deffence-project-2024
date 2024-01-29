import React, { useState } from 'react';
import styles from './Login.module.css'; // Reuse the styling from RegisterForm.css

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login Data:', formData);
        // Reset the form after submission
        setFormData({
            username: '',
            password: '',
        });
    };

    return (
        <div className={styles['form-wrapper']}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <label className={styles['label']}>
                    Username:
                    <input className={styles['input']} type="text" name="username" value={formData.username} onChange={handleChange} required />
                </label>
                <br />

                <label className={styles['label']}>
                    Password:
                    <input className={styles['input']} type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <br />

                <button className={styles['button']} type="submit">Login</button>
            </form>

            <p className={styles['p']}> Background photo by <a href="https://unsplash.com/@augustinewong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Augustine Wong</a> on <a href="https://unsplash.com/photos/white-wall-paint-with-black-line-3Om4DHcaAc0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </p>
        </div>
    );
};

export default Login;
