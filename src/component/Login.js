import React, { Component } from "react";

export default class Login extends Component {

 
  submitLogin(e) {

  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type={this.props.type}
              name={this.props.name}
              className={this.props.className}
              placeholder={this.props.placeholder}
              onChange={this.props.onChange}
            />
            {/* <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small> */}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type={this.props.type}
              name={this.props.name}
              className={this.props.className}
              placeholder={this.props.placeholder}
              onChange={this.props.onChange}
            />
            {/* <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small> */}
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
