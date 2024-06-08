import React from "react";
import holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

class Header extends React.Component {
  static contextType = AppContext
  render () {
  const data = this.context
    return (
      <>
      {console.log(data)}
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.headerImg)} />
        <h1>School dashboard</h1>
      </div>
      {data.user.isLoggedIn && 
        <div id="logoutSection">
          <p>Welcome {data.user.email} <a onClick={data.logOut}>(logout)</a></p>
          <p>{data.user.password}</p>
        </div>
      }
      </>
    );
  }
}


const cssVars = {
  mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: cssVars.mainColor,
    fontSize: "20px",
  },

  headerImg: {
    width: "200px",
  },
});

export default Header;
