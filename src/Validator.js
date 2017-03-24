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
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
