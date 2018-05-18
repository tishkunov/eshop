import React, { Component } from 'react';

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.state = { email: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("form is submit", this.state.email);
    event.preventDefault();
  }

  handleEmailChange(event) {
    console.log("form is change", event.target.value);
    this.setState({email: event.target.value});
  }

  render() {
    return (<div>RegistrationForm frame!
    	<form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
      <p className="kostya">
      {this.state.email}
      </p>
      </form>
    	</div>);
  }
}

export default RegistrationForm;