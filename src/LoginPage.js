import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import dogSwiping from './assets/dogSwiping.png'; // Assuming this path is correct relative to LoginPage.js

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
    };

    return (
        <>
            <header className={styles.pageHeader}>
                <h1>Welcome to <span className={styles.pageName}>PawConnect</span> 🐾</h1>
            </header>
            <div className={styles.registerContainer}>
                <form className={styles.registerForm} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                    <button type="submit">Login</button>
                    <p className={styles.signupHint}>
                        didn't have account yet?
                        <span>
                            <Link to="/signup" className={styles.signupLink}>Sign up</Link>
                        </span>
                    </p>
                </form>
                <div className={styles.displayContainer}>
                    <div className={styles.firstBox}>
                        <p>love is</p>
                        <p>just</p>
                        <p>a</p>
                        <p>sniff away!</p>
                    </div>
                    <div className={styles.secondBox}>
                        <img src={dogSwiping} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
