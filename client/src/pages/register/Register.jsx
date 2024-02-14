import React, { useState } from 'react'

import styles from './Register.module.css'

import * as authService from '../../services/authService'
import { request } from '../../lib/request';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
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
        // console.log('Registration Data:', formData);

        const bri = authService.register(formData.email, formData.password)

        setFormData({
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
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
                    Email:
                    <input className={styles['input']} type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />

                <label className={styles['label']}>
                    Password:
                    <input className={styles['input']} type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <br />

                <label className={`${styles['label']} ${styles['error']}`}>
                    Repeat Password:
                    <input className={styles['input']} type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} required />
                </label>
                <br />

                <button className={styles['button']} type="submit">Register</button>
            </form>
            <p className={styles['p']}>Background photo by <a href="https://unsplash.com/@hngstrm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Henry & Co.</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-white-marble-wall-tqu0IOMaiU8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </p>
        </div>
    );
};

export default Register;
