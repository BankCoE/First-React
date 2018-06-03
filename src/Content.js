import React, {Component} from 'react';

class Content extends Component{
  constructor(){
    super();
    this.state={
      value: 0,
      debug: ""
    }
  }
  add(){
    this.setState({value: this.state.value + 1})
  }
  sub(){
    if(this.state.value >= 1){
      this.setState({value: this.state.value - 1})
    }else {
      this.setState({debug: "** ไม่สามารถน้อยกว่า 0 ได้ **"})
      setTimeout(()=>{
        this.setState({debug: ""})
      }, 2500)
    }
  }
  render(){
    var myStyle={
      color: '#FF0000'
    }
    return(
      <div>
        <h3>Facebook Library</h3>
        <h1><a href="/">Home</a></h1>
        <center>
        <h3>{this.state.value}</h3>
        <button onClick={this.add.bind(this)}>+</button>&nbsp;
        <button onClick={this.sub.bind(this)}>-</button><br/><br/>
        <label style={myStyle}>{this.state.debug}</label>
        </center>
      </div>
    )
  }
}
export default Content;
