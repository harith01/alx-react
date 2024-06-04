import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  
  AppLogo: {
    width: 200,
    height: 200,
  }
})

export default function Header () {
    return (
      <>
        <img src={logo} className={css(styles.AppLogo)} alt="logo" />
        <h1>School dashboard</h1>
      </>
    )
} 