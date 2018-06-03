import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//สร้าง Component = JSX
class App extends Component {
  render(){
    return(
      <div>
        <h1>BankCoE</h1>
        <h1><a href="/header">Header</a></h1>
        <h1><a href="/content">Content</a></h1>
        <h1><a href="/footer">Footer</a></h1>
        <h1><a href="#">Home</a></h1>
      </div>
    );
  }
}
export default App;
