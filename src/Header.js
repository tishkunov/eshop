import React, { Component, PropTypes } from 'react';
import './App.css';
import {  Route, hashHistory} from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import setCountCartAction from "./actions/actionCart";

class Header extends Component {

  constructor() {
    super();
    this.state = {
    };

  }
  render() {
    return <div className="header">
    <div className="wrapper">
      <h1><img src="/img/Logo.png" /></h1>
      <ul className="header-nav">
    {
      this.props.nav.map((item, index) => 
      <li key={index}> <Link to={item.link}> {item.label}</Link></li> 

    )}
      </ul>
      <li className="cart-header" key={111}> <Link to="/cart"><img src="/img/fa-shopping-cart.png"  /> <div className="circle-count">
      <p>{this.props.countprod}</p>

      </div></Link></li> 
      <img src="/img/fa-search.png"  />
      </div>
    </div>;
  }
}


function mapStateToProps(state) {
  return  {
    countprod: state.productsInfo.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);