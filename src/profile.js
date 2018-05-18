import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
	constructor(props) {
		super(props);
		
	}

	chooseFilm(event) {
	    if (event.target.tagName == "IMG") {
	      event.target.parentNode.classList.add('choosed');
	    }
	    else {
	      event.target.classList.add('choosed');
	    }
	  }

	
  render() {
  	if (localStorage.getItem('login') != "admin" && localStorage.getItem('pass') != "12345") {
	  return <Redirect to="/login" />;
	}
    return (<div><p>Profile</p>
    	</div>);
  }
}

export default Profile;