import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import { Router, BrowserRouter, Link, Redirect } from 'react-router-dom';
import Men from "./men";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			login: "",
			isOpened: false,
			auth: false
		}
	}

	onChangeLogin(event) {
		this.setState({login: event.target.value, isOpened: false});
	}

	onChangePass(event) {
		this.setState({password: event.target.value, isOpened: false});
	}

	onSubmitForm(e) {
		 e.preventDefault();
		localStorage.setItem('login', this.state.login);
		localStorage.setItem('pass', this.state.password);
		if (this.state.login != "admin" && this.state.password != "12345") {
			this.setState({isOpened: !this.state.isOpened});
		}
		else {
			this.setState({auth: !this.state.auth});
			<Redirect to="/profile"/>
		}
		e.target.elements['login'].value = "";
		e.target.elements['pass'].value = "";
	}


  render() {
  	let dropdownText;
  	if (this.state.isOpened) {
  		dropdownText = <div>Имя пользователя или пароль введены не верно</div>;
  	}
    return (
    	<div>
    	{this.state.auth ? <Redirect to={{pathname: '/profile'}}/> : (

<form onSubmit={this.onSubmitForm.bind(this)}>
    	<input type="text" name="login" onChange={this.onChangeLogin.bind(this)} placeholder="Login"/>
    	<input type="password" name="pass" onChange={this.onChangePass.bind(this)} placeholder="Pass"/>
    	<input type="submit" />
    	</form>
 
    	
    		)}
    	</div>);
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: countprods => {
      
    }
    
    /*setGetNew: trg => {
      console.log(trg)
      
    }*/
  }
}

export default connect(mapDispatchToProps)(Login);