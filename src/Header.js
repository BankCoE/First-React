import React, {Component} from 'react';

class Header extends Component{
  constructor(){
    super();
    this.state={
      name: "Unlike",
      count: 0
    };
  }
  render(){
    return(
      <div>
        <h1>BankCoE Tutorial</h1>
        <h1><a href="/">Home</a></h1>
      </div>
    )
  }
}
export default Header;
