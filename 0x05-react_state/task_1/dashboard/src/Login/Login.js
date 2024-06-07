import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit (event) {
    this.setState({ isLoggedIn: true });
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
    this.state.email != "" && this.state.password != "" ?
      this.setState({enableSubmit: true}):
      this.setState({enableSubmit: false})
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value})
    this.state.email != "" && this.state.password != "" ?
      this.setState({enableSubmit: true}):
      this.setState({enableSubmit: false})
  }

  render() {
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={this.state.email} onChange={this.handleChangeEmail} className={css(styles.loginInput)} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} className={css(styles.loginInput)} />
          <input type="submit"  disabled={!this.state.enableSubmit}/>
        </form>
      </div>
    );
  }
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
