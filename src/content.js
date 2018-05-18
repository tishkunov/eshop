import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route, hashHistory} from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";
import { Router, BrowserRouter, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import setCountCartAction from "./actions/actionCart";
import Filterblock from "./filterblock";
import Leftsidebar from "./leftsidebar";
import filterCheaperAction from "./actions/filterCheaper";
import filterExpensiveAction from "./actions/filterExpensive";
import filterAlphabetAction from "./actions/filterAlphabet";
import addTypeAction from "./actions/addType";
import showButton from "./actions/showButton";
import clearAll from "./actions/clearType";
import searchActions from "./actions/productSearch";

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpened: false};
		this.onAddToCart = this.onAddToCart.bind(this);
		this.onAddToCartCount = this.onAddToCartCount.bind(this);
		this.onAddToCartProduct = this.onAddToCartProduct.bind(this);
		this.onAddToType = this.onAddToType.bind(this);
	}

	onAddToCart(event) {
		this.onAddToCartCount(event);
		var prodid = event.target.getAttribute('unique');
		this.onAddToCartProduct(prodid);
	}

	onAddToCartCount(event) {
		return this.props.setCartCounts(this.props.countprod);
	}

	onAddToCartProduct(prodid) {
		return this.props.setCartProduct(prodid);
	}

	onAddToType(event) {
		this.props.addTypeFunction(event.target.getAttribute('typefilter'));
	}


	
	
  render() {
  	const {setFilterExpensive,setFilterCheaper,setFilterAlphabet,showAllTypeFunction,clearAllTypeFunction,productSearchFunction} = this.props;
    return (<div className="main-content">
    	<div className="wrapper">
    	<Leftsidebar onProductSearch={productSearchFunction} typesFunction={this.onAddToType} onShowAllType={showAllTypeFunction} onClearAllType={clearAllTypeFunction} />
    		<div className="right-side">
    		<Filterblock filterCheaper={setFilterCheaper} filterExpensive={setFilterExpensive} filterAlphabet={setFilterAlphabet}/>
    		{

		      this.props.items.map((item, index) => 
		     
		      <a href={item.link} key={index}>
    			<div className="one-product">
    				<div className="one-product-items">
	    				<img src={item.image} alt="Vans old skool" /> 
	    				<h3>{item.category}</h3>
	    				<p>{item.name} </p>
	    				<span>${item.price}</span>
    				</div>
    				<div className="one-product-cover">
	    				<h3>{item.category}</h3>
	    				<p>{item.name} </p>
	    				<span>${item.price}</span>
	    				<button className="add-to-cart" unique={item.id} key={index} onClick={this.onAddToCart}>Add to cart</button>
    				</div>
    			</div>

    			
    		   </a>
		    )}
		    
    		</div>
    	</div>
    	</div>);
  }
}

function mapStateToProps(state) {
  return  {
    countprod: state.productsInfo.count,
    clearAll: state.productsInfo.clearAll
  }
}

function mapDispatchToProps(dispatch) {
	return {
		setCartFunction: (countprod) => {
			dispatch(setCountCartAction(countprod))
		},
		setFilterCheaper: () =>  {
			dispatch(filterCheaperAction())
		},
		setFilterExpensive: () => {
			dispatch(filterExpensiveAction())
		},
		setFilterAlphabet: () => {
			dispatch(filterAlphabetAction())
		},
		addTypeFunction: (typefilter) => {
      		dispatch(addTypeAction(typefilter))
    	},
    	showAllTypeFunction: () => {
    		dispatch(showButton())
    	},
    	clearAllTypeFunction: () => {
    		dispatch(clearAll())
    	},
    	productSearchFunction: (event) => {
    		 dispatch( searchActions(event.target.value))
    		
    	}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
