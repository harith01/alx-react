import React from "react";
import holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render () {
    const { user, logout } = this.props;
    return (
      <>
      <div className={css(styles.header)}>
        <img src={holberton_logo} className={css(styles.headerImg)} />
        <h1>School dashboard</h1>
      </div>
      {data.user.isLoggedIn && 
        <div id="logoutSection">
          <p>Welcome {user.email} <a onClick={logout}>(logout)</a></p>
          <p>{user.password}</p>
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

const mapStateToProps = (state) => ({
  user: state.get('user'),
})

const mapDispatchToProps = {
  logout,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
