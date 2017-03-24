import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super()
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      valid: true
    }
  }

  handleEmail(event) {
    this.setState({
      email.event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password.event.target.value
    })
  }

  handleConfirmPassword(event){
    this.setState({
      confirmPassword.event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.checkMatch()
  }

  checkMatch() {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({valid: true})
    } else {
      this.setState({valid: false})
    }
  }

  render() {
    let passwordsConfirmed = this.state.valid? "Passwords match...you are GTG!" : "Passwords don't match...try again!"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(event) => this.handleEmail(event)} type="text" placeholder="email" />
        <input onChange={(event) => this.handlePassword(event)} type="password" placeholder="password" />
        <input onChange={(event) => this.handleConfirmPassword(event)} type="password" placeholder="confirm password" />
        <input onClick={(event) => this.handleSubmit(event)} type="submit" value="Submit" />
        <p>{passwordsConfirmed}
      </div>
    );
  }
}

export default Validator;
