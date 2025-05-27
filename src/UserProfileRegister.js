import React from "react";
import { Link } from "react-router-dom";
import styles from './UserProfileRegister.module.css';
import userProfile from './assets/userProfile.png'
import dogProfile from './assets/dogProfile.png'


function UserProfileRegister() {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.pageHeader}>
                    <h1>Welcome to <span className={styles.pageName}>PawConnect!</span> Let's get Started!</h1>
                </header>
                <main className={styles.pageContainer}>
                    <div className={styles.pageGreeting}>
                        <p>Awesome to have you!</p>
                        <p>To help you and your furry friend</p>
                        <p>make the best connections, we'll set up two quick profiles</p>
                    </div>
                    <div className={styles.profiles}>
                        <div className={styles.profileContainer}>
                            <div className={styles.profile}>
                                <img src={userProfile} alt="" />
                            </div>
                            <div className={styles.profileContent}>
                                <p>First, About You!</p>
                                <p>This is your personal space.</p>
                                <p>Tell other pet parents</p>
                                <p>a bit about yourself.</p>
                            </div>
                        </div>
                        <div className={styles.spaceBT}>
                            &
                        </div>
                        <div className={styles.profileContainer}>
                            <div className={`${styles.profile} ${styles.dogProfile}`}>
                                <img src={dogProfile} alt="" />
                            </div>
                            <div className={`${styles.profileContent} ${styles.dog_profileContent}`}>
                                <p>First, About You!</p>
                                <p>This is your personal space.</p>
                                <p>Tell other pet parents</p>
                                <p>a bit about yourself.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
export default UserProfileRegister;