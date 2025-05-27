import React, { useState } from "react";
import styles from './SignupPage.module.css';
import dogSwiping from './assets/dogSwiping.png';

function SignupPage() {
    // State variables for each input field
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // handleSubmit function 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstName, lastName);
    }
    return (
        <>
            <header className={styles.pageHeader}>
                <h1>Create Your <span className={styles.pageName}>PawConnect</span> Account 🐾</h1>
            </header>
            <div className={styles.registerContainer}>
                <form className={styles.registerForm} onSubmit={handleSubmit}>
                    <h1>SignUp</h1>

                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="" id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />

                    <label htmlFor="confirmPassword">Confirmation:</label>
                    <input type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />

                    <button type="submit">Sign Up</button>
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
export default SignupPage;