import React, { useState } from 'react'

import * as authService from '../../services/authService'
import styles from './Register.module.css'


const formInitState = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
}

const Register = () => {
    const [formData, setFormData] = useState(formInitState);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Registration Data:', formData);
        try {
            const result = await authService.register(formData.email, formData.password);
            setLocalStorage("accessToken", result.accessToken)
        } catch (error) {
            setFormErrors((prevErrors) => ({ ...prevErrors, "generalError": error.message }))
        }

        setFormData(formInitState);
    };

    const setLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    }

    const inputValidatior = (e) => {
        const targetName = e.target.name

        try {
            setFormErrors((prevErrors) => ({ ...prevErrors, [targetName]: null, "generalError": null }));

            if (targetName === "username") {
                const regex = /^[a-zA-Z0-9_]+$/;
                const test = regex.test(formData.username);
                if (formData.username == "") {
                    throw new Error('Username is required!')
                }
                if (!test) {
                    throw new Error('Must contain only letters and numbers for space you can use underscore!');
                }

            }

            if (targetName === "email") {
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                const test = regex.test(formData.email);
                if (formData.email == "") {
                    throw new Error('Email is required!')
                }
                if (!test) {
                    throw new Error('Please enter valid email address!')
                }
            }

            if (targetName === "password") {
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/;
                const test = regex.test(formData.password);
                if (formData.password == "") {
                    throw new Error('You can\'t register without password!')
                }
                if (!test) {
                    throw new Error('Password must consists of lower and uppercase letters and atleast one number. It should be 6-15 symbos!');
                }
            }

            if (targetName === "repeatPassword") {
                if (formData.repeatPassword == "") {
                    throw new Error('Let\'s make sure there\'s no mistake!')
                }
                if (formData.password !== formData.repeatPassword) {
                    throw new Error('Password does not match!');
                }
            }
        } catch (error) {
            // console.log(error);
            setFormErrors((prevErrors) => ({ ...prevErrors, [targetName]: error.message }))
        }

    }

    return (
        <div className={styles['form-wrapper']}>
            <form className={styles['form']} onSubmit={handleSubmit}>

                {formErrors.generalError && <p className={styles['general-error-text']}>{formErrors.generalError}</p>}

                <label className={formErrors.username ? `${styles['label']} ${styles['error']}` : styles['label']} htmlFor="username"> Username:
                    <input
                        className={styles['input']}
                        type="text"
                        name="username"
                        placeholder='John Doe'
                        value={formData.username}
                        onChange={handleChange}
                        onBlur={inputValidatior}
                        required />
                    {formErrors.username && <p className={styles['error-text']}>{formErrors.username}</p>}
                </label>
                <br />

                <label className={formErrors.email ? `${styles['label']} ${styles['error']}` : styles['label']} htmlFor="email"> Email:
                    <input
                        className={styles['input']}
                        type="email"
                        name="email"
                        placeholder='jhonDoe96@gmail.com'
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={inputValidatior}
                        required />
                    {formErrors.email && <p className={styles['error-text']}>{formErrors.email}</p>}
                </label>
                <br />

                <label className={formErrors.password ? `${styles['label']} ${styles['error']}` : styles['label']} htmlFor="password"> Password:
                    <input
                        className={styles['input']}
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={inputValidatior}
                        required />
                    {formErrors.password && <p className={styles['error-text']}>{formErrors.password}</p>}
                </label>
                <br />

                <label className={formErrors.repeatPassword ? `${styles['label']} ${styles['error']}` : styles['label']} htmlFor="repeatPassword"> Repeat Password:
                    <input
                        className={styles['input']}
                        type="password"
                        name="repeatPassword"
                        placeholder='Repeat your password'
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        onBlur={inputValidatior}
                        required />
                    {formErrors.repeatPassword && <p className={styles['error-text']}>{formErrors.repeatPassword}</p>}
                </label>
                <br />

                <button
                    className={styles['button']}
                    type="submit">Register
                </button>
            </form>

            <p className={styles['p']}>Background photo by <a href="https://unsplash.com/@hngstrm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Henry & Co.</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-white-marble-wall-tqu0IOMaiU8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </div >
    );
};

export default Register;
