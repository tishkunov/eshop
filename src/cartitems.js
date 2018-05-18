import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import removeCartCountAction from "./actions/removeCartCount";

const store = createStore(rootReducer);


class Cartitems extends Component {
	constructor(props) {
		super(props);
		this.state = {
    	};
    	this.onRemoveCartCount = this.onRemoveCartCount.bind(this);
    	this.onRemoveCart = this.onRemoveCart.bind(this);
    	this.onIncreaseToCart = this.onIncreaseToCart.bind(this);
    	this.onAddToCart = this.onAddToCart.bind(this);
    	this.onAddToCartProduct = this.onAddToCartProduct.bind(this);
    	this.onReduceProductCount = this.onReduceProductCount.bind(this);
    	this.onReduceProductInCart = this.onReduceProductInCart.bind(this);
}

	onRemoveCart(event) { this.onRemoveCartCount(event); var prodid = event.target.getAttribute('removeId'); this.onRemoveCartProduct(prodid);}

	onRemoveCartCount(event) {
		return this.props.removeSetCartCounts(this.props.countprod);
	}
	
	onRemoveCartProduct(prodid) {console.log(this.props.cartProd);return this.props.removeCartProduct(prodid);}

	onIncreaseToCart(event) {this.onAddToCartCount(event);var prodid = event.target.getAttribute('unique');this.onAddToCartProduct(prodid);}

	onAddToCart(event) {
		this.onIncreaseToCart(event);
		var prodid = event.target.getAttribute('unique');
		this.onAddToCartProduct(prodid);
	}

	onIncreaseToCart(event) {
		return this.props.setCartCounts(this.props.countprod);
	}

	onAddToCartProduct(prodid) {
		return this.props.setCartProduct(prodid);
	}

	onReduceProductInCart(event) {
		this.onReduceProductCount(event);
		var prodid = event.target.getAttribute('unique');
		this.onReduceProduct(prodid);
	}

	onReduceProductCount(event) {
		return this.props.reduceCartCount(this.props.countprod);
	}

	onReduceProduct(prodid) {
		return this.props.reduceProduct(prodid);
	}

  	render() {
  		console.log(this.props.carts)
    	return (<div className="cart-items-wrap">
    		<ul>

         	{this.props.carts.map((item, index) =>
         			<li key={index}> 
	         	<div className="product">
	         		<div className="image"><img src={item.image} /></div>
	         		<div className="info-about-product">
	         		<h3>{item.name}</h3>
	         		<p>{item.category}</p>
	         		<p>$ {item.price}</p>
	         		<div className="count-reducer">
	         			<button onClick={this.onReduceProductInCart} unique={item.id}>-</button>
	         			<div>{item.count}</div>
	         			<button unique={item.id} onClick={this.onAddToCart}>+</button>
	         		</div>
	         		<button onClick={this.onRemoveCart} unique={item.id} removeId={item.id}>X </button>
	         		</div>
	         	</div>
         	</li>
         	) 	
     	}
     	</ul>

    	</div>);
  }
}

function mapStateToProps(state) {
  return  {
     cartProd: state.productsInfo.cartProd,
     trg: state.productsInfo.trg,
     countprod: state.productsInfo.count
  }
}

function mapDispatchToProps(dispatch) {
	return {
		removeFromCart: (countprod) => {
			dispatch(removeCartCountAction(countprod))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cartitems);