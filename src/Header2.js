import React, { Component, PropTypes } from 'react';
import './App.css';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {
    link: '/arcticles',
    label: 'Arcticles'
  },
  {
    link: '/contacts',
    label: 'Contacts'
  },
  {
    link: '/posts',
    label: 'Posts'
  },
  {
    link: '/news',
    label: 'News'
  }
      ],
     
      
      minutes:0,
      sec:0, 
      globend:0
    };
this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleSubmit(event) {
    this.getInt();
    event.preventDefault();
    this.setState({globend:1})
  }

  handleChange(event) {
    let arr = event.target.value.split(':');
    console.log(arr);
    let minute = arr[0];
    let secs = arr[1];
    this.setState({minutes:minute,sec:secs});
  }

  handleStop() {
    this.setState({globend:0});
    console.log(this.state.globend)
  }


  getInt() {
    setInterval(() => {
      if (this.state.globend == 1) {
         if (this.state.sec == 0) {
          if (this.state.minutes == 0) {
            
                alert("Время вышло");
                return;
            
            //this.setState({hours:this.state.hours - 1,minutes:60});
          }
          this.setState({minutes:this.state.minutes - 1,sec:59});
        }
      
     
      this.setState({sec:this.state.sec - 1});
      }
    }

     ,1000);
    
  }

  render() {
    
    return <div>
    <h1>VanSSPB</h1>
    <Router history={history}>
    <div>

    {
      this.state.products.map((item, index) => 
      <a href={item.link} key={index}>{item.label}</a>  
    )}
      <Route exact path="/" component={Home} />
      <Route path="/dropdown" component={Dropdown} />
      </div>
    </Router>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Введи время для таймера в виде 10:30" onChange={this.handleChange} />
      <button className="kott"></button>  
      </form>
     <button onClick={this.handleStop} className="kot2">STOP THIS SHIT</button> 
     
      <p>{this.state.minutes}</p>
      <p>{this.state.sec}</p>
    </div>;
  }
}

export default Header;