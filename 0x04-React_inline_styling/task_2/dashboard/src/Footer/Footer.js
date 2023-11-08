import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

function Footer() {
  return (
    <>
      <div className={css(styles.AppFooter)}>
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  AppFooter: {
    fontSize: '1rem',
    padding: '1.2rem',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #e0354b',
  }
})

export default Footer;
