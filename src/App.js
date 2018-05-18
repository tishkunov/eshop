import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './dropdown';
import Header from './Header';
import Men from './men';
import Profile from './profile';
import Login from './login';
import Cart from './cart';
import Content from './content';
import {  Route, hashHistory} from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import setCountCartAction from "./actions/actionCart";
import setGetNewAction from "./actions/setGetNewProd";

const store = createStore(()=>{});


const history = createBrowserHistory();

const menu = [
  {
    link: '/',
    label: 'HOME'
  },
  {
    link: '/men',
    label: 'MEN'
  },
  {
    link: '/profile',
    label: 'Profile'
  },
  {
    link: '/login',
    label: 'Login'
  }
]



/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/


class App extends Component {
  constructor() {
    super();
    this.state = {
      products : [
  {
    id:1,
    category: 'T-Shirt',
    name: 'Old skool',
    price: '65',
    vendorcode: '594780',
    image:'/img/vans-old-skool.jpg'
  },
  {
    id:2,
    category: 'Sneakers',
    name: 'Old skool',
    price: '80',
    vendorcode: '594781',
    image: '/img/vans-old-skool.jpg'
  },
  {
    id:3,
    category: 'Sneakers',
    name: 'Old skool',
    price: '95',
    vendorcode: '594782',
    image: '/img/vans-old-skool.jpg'
  },
  {
    id:4,
    category: 'Sneakers',
    name: 'Old skool',
    price: '120',
    vendorcode: '594783',
    image: '/img/vans-old-skool.jpg'
  }
]
    }
  }

  render() {
    const {products} = this.state;
    return <div>
    <Router history={history}>
      <div>
      <Header nav={menu} />
      <Route exact path='/' render={(props) => (
        <Content {...props} count={props.countprod} setCartCounts={this.props.setCartFunction} setCartProduct={this.props.setProdCartFunction}  items={this.props.trgInView}   />
      )}/>
      <Route path="/men" component={Men} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
      </div>

    </Router>
    
    
    
    </div>;
  }
}

function mapStateToProps(state) {
  return  {
    countprod: state.productsInfo.count,
    trg: state.productsInfo.trg,
    trgInView: state.productsInfo.trgInView
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCartFunction: countprods => {
      dispatch(setCountCartAction(countprods))
    },
    setProdCartFunction: prod => {
      dispatch(setGetNewAction(prod))
    },
    /*setGetNew: trg => {
      console.log(trg)
      
    }*/
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);