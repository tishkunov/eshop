import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./login";
import {  Route, hashHistory} from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, BrowserRouter, Link, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

class Men extends Component {
	constructor(props) {
		super(props);
		
	}

	
  render() {
  	
    return (<Route  path="/" render={() => (
		  this.props.auth ? (
		    <Redirect to="/profile"/>
		  ) : (
		    <Login />
		  )
		)}/>);
  }
}

export default Men;