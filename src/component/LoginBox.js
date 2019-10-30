import React, { Component } from "react";

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: []
    };
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
    this.clearValidationErr("username");
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
    this.clearValidationErr("password");
  }

  submitLogin = e => {
    if (this.state.username === "") {
      this.showValidationErr("username", "Username cannot be empty");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password cannot be empty");
    }
  };

  render() {
    let usernameErr = null;
    let passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
    }
    return (
      <div className="inner-container">
        <div className={this.props.headercls}>{this.props.headertxt}</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">{this.props.labeltxt}</label>
            <input
              type={this.props.type}
              name={this.props.name}
              className={this.props.className}
              placeholder={this.props.placeholder}
              onChange={this.onUsernameChange.bind(this)}
            />
           <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small> 
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
          </div>

          {/* <div className="input-group">
            <label htmlFor="password">{this.props.labeltxt2}</label>
            <input
              type={this.props.type2}
              name={this.props.name2}
              className={this.props.className2}
              placeholder={this.props.placeholder2}
              onChange={this.onPasswordChange.bind(this)}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
          </div> */}

          {this.props.btnclass && (
            <button
              type={this.props.btntype}
              className={this.props.btnclass}
              onClick={this.submitLogin.bind(this)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default LoginBox;
