import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route, hashHistory} from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import Cartitems from "./cartitems";
import removeCartCountAction from "./actions/removeCartCount";
import removeCartProductAction from "./actions/removeCartProduct";
import increaseProductIncartAction from "./actions/actionCart";
import setGetNewAction from "./actions/setGetNewProd";
import reduceCountCartAction from "./actions/reduceProductCount";
import reduceProductAction from "./actions/reduceProduct";

const store = createStore(rootReducer);

class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
      	products: store.getState().productsInfo.trg,
      	productsInCart: store.getState().productsInfo.cartProd
    	};

    	
	}

static propTypes = {
    trg: PropTypes.array.isRequired,
  };
	
  render() {

  	const {trg, cartProd} = this.props;
  	let cartcheck;
  	cartProd == 0 ? cartcheck = "Cart EMPTY!" : console.log('cartnotempty')
    return (<div>
    {cartcheck}
<Cartitems nav={this.state.products} 
setCartCounts={this.props.onIncreaseProductInCartCount} 
setCartProduct={this.props.setProdCartFunction} 
removeSetCartCounts={this.props.removeFromCartCount} 
removeCartProduct={this.props.removeFromCartProduct} 
carts={cartProd} 
reduceCartCount={this.props.reduceCountCarts}
reduceProduct={this.props.reduceProductCart} /> 	
    	</div>);
  }
}

function mapStateToProps(state) {
  return  {
     cartProd: state.productsInfo.cartProd,
     trg: state.productsInfo.trg
  }
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromCartCount: (countprod) => {
			dispatch(removeCartCountAction(countprod))
		},
		removeFromCartProduct: prod => {
      		dispatch(removeCartProductAction(prod))
    	},
    	onIncreaseProductInCartCount: countprod => {
    		dispatch(increaseProductIncartAction(countprod))
    	},
    	setProdCartFunction: prod => {
      		dispatch(setGetNewAction(prod))
    	},
    	reduceCountCarts: prod => {
      		dispatch(reduceCountCartAction(prod))
    	},
    	reduceProductCart: prod => {
    		dispatch(reduceProductAction(prod))
    	}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart);