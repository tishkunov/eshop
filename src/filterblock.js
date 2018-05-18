import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Filterblock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCheaper:false,
			isAlphabet:false,
			isExpensive:false
		}
	}

	onFilterCheaper(event) {
		this.setState({isCheaper: true, isExpensive: false, isAlphabet: false});
		return this.props.filterCheaper();
	}

	onFilterExpensive(event) {
		this.setState({isCheaper: false, isExpensive: true, isAlphabet: false});
		return this.props.filterExpensive();
	}

	onFilterAlphabet(event) {
		this.setState({isCheaper: false, isExpensive: false, isAlphabet: true});
		return this.props.filterAlphabet();
	}



  render() {
  	
    return (<div className="filter-block">
    	<p>First there</p>
    	<button  onClick={this.onFilterCheaper.bind(this)} className={this.state.isCheaper ? 'active' : ''}>cheaper</button>
    	<button onClick={this.onFilterExpensive.bind(this)} className={this.state.isExpensive ? 'active' : ''}>expensive</button>
    	<button onClick={this.onFilterAlphabet.bind(this)} className={this.state.isAlphabet ? 'active' : ''}>alphabetically</button>
    	</div>);
  }
}

export default Filterblock;