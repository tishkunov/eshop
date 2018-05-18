import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";

class Onetypefilter extends Component {
    constructor(props) {
        super(props);
        
        this.getTypeFunction = this.getTypeFunction.bind(this);
        this.state = {
            active: false,
        };
        if (this.props.isClearAll) {
            this.setState({ active: false});
        }
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    getTypeFunction(event) {
        
        return this.props.getTypeFunctionTred(event);
    }

   

    render() {
        
        return (
            <div className="one-type">
                <button onClick={(event) => { this.getTypeFunction(event); this.toggleClass();}} className={this.state.active  ? 'active': null}  typefilter={this.props.typename}></button>
                <p>{this.props.typename}</p>
            </div>
        )
  }
}

function mapStateToProps(state) {
  return  {
    clearAll: state.productsInfo.clearAll
  }
}

export default connect(mapStateToProps)(Onetypefilter);