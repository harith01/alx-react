import React from "react";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
   
    
    formInput: {
        margin: 10,
        '@media (max-width: 900px)': {
            display: 'block',
        },
    }
})

export default function Login() {
    return (
        <>
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input className={css(styles.formInput)} type="email" name="email"></input>
                    <label htmlFor="password">Password:</label>
                    <input className={css(styles.formInput)} type="password" name="password"></input>
                    <button>OK</button>
                </form>
        </>
    );
};