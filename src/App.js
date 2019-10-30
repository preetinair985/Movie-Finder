import React, { Component } from "react";
import LoginBox from "./component/LoginBox";
import RegisterBox from "./component/RegisterBox";
import "../src/css/Style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && (
            <div>
            <LoginBox
              headertxt="Login"
              headercls="header"
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              labeltxt="Username"
            />
            <LoginBox 
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              btnclass="login-btn"
              btntype="button"
            />
            </div>
          )}
          {this.state.isRegisterOpen && <RegisterBox 
            type1="text"
            name1="username"
            className1="login-input"
            placeholder1="Username"

            type2="text"
            name2="email"
            className2="login-input"
            placeholder2="Email"

            type3="password"
            name3="password"
            className3="login-input"
            placeholder3="Password"
          />}
        </div>
      </div>
    );
  }
}

export default App;
