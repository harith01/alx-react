import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <div className={css(styles.Appheader)}>
        <img src={logo} className={css(styles.AppHeaderImg)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const styles =  StyleSheet.create({
  Appheader: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
  },
  
  AppHeaderImg: {
    width: '200px',
    height: '200px',
  }
});

export default Header;
