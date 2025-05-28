import React from "react";
// import { Link } from "react-router-dom";
import styles from './userBasic.module.css';
function UserBasic() { // Component names are conventionally PascalCase

    const handleSubmit = (event) => {
        event.preventDefault(); // VERY IMPORTANT: Prevents the default browser page reload on form submission
        // Add your logic here to gather form data
        // For example, if using controlled components, you'd get values from state
        // Then, you might navigate to the next page or send data to an API
        console.log("Form submitted!");
        // Example:
        // const formData = {
        //     displayName: event.target.elements.displayNameInput.value, // Or from state
        //     location: event.target.elements.locationInput.value,   // Or from state
        //     familySituation: event.target.elements.familySituation.value, // Or from state
        //     livingSituation: event.target.elements.livingSituation.value // Or from state
        // };
        // console.log(formData);
    };

    return (
        <>
            <div className={styles.pageWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.pageTitle}>let's start with your basic!</h1>
                </div>
                {/* Replace div with form and add onSubmit handler */}
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <div className={styles.fieldLabel}>your display name:</div>
                        <p className={styles.fieldDescription}>this is the name other users will see</p>
                        {/* It's good practice to add a 'name' attribute for form handling,
                            and 'id' if you want to associate labels explicitly, though your current labels work */}
                        <input
                            className={styles.textInput}
                            type="text"
                            placeholder="e.g., Buddy's Dad"
                            name="displayNameInput" // Added name attribute
                        />
                    </div>
                    <div className={styles.formField}>
                        <div className={styles.fieldLabel}>Location/Zip code:</div>
                        <p className={styles.fieldDescription}>Help us connect you with dog friends in your neighborhood!</p>
                        <input
                            className={styles.textInput}
                            type="text"
                            placeholder="e.g., 1001 or Brooklyn, NY"
                            name="locationInput" // Added name attribute
                        />
                    </div>
                    <div className={styles.formField}>
                        <div className={styles.fieldLabel}>Family Situation:</div>
                        <p className={styles.fieldDescription}>Help other pet parents understand your household</p>
                        <div className={styles.radioGroup}>
                            {/* For radio buttons, the 'name' attribute groups them */}
                            <label className={styles.radioOption} htmlFor="single">
                                <input className={styles.radioInput} type="radio" id="single" name="familySituation" value="Single" />
                                <span className={styles.optionText}>Single</span>
                            </label>
                            <label className={styles.radioOption} htmlFor="couple">
                                <input className={styles.radioInput} type="radio" id="couple" name="familySituation" value="Couple" />
                                <span className={styles.optionText}>Couple</span>
                            </label>
                            <label className={styles.radioOption} htmlFor="family">
                                <input className={styles.radioInput} type="radio" id="family" name="familySituation" value="Family with Kids" />
                                <span className={styles.optionText}>Have Kids</span>
                            </label>
                            <label className={styles.radioOption} htmlFor="senior">
                                <input className={styles.radioInput} type="radio" id="senior" name="familySituation" value="Senior-Friendly" />
                                <span className={styles.optionText}>Senior-Friendly</span>
                            </label>
                            <label className={styles.radioOption} htmlFor="otherFamily"> {/* Changed id to avoid conflict if 'other' is used elsewhere */}
                                <input className={styles.radioInput} type="radio" id="otherFamily" name="familySituation" value="Other" />
                                <span className={styles.optionText}>Other</span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.formField}>
                        <div className={styles.fieldLabel}>Living Situation:</div>
                        <p className={styles.fieldDescription}>This helps match pet with compatible play environments</p>
                        <select className={styles.selectInput} name="livingSituation"> {/* Added name attribute */}
                            <option value="">Select your living situation</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House with Yard">House with Yard</option>
                            <option value="Farm">Farm</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formField_button}>
                        <button type="submit">Next</button>
                    </div>
                </form> {/* Closing form tag */}
            </div >
        </>
    );
}
export default UserBasic;