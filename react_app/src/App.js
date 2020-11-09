import React, {Component} from 'react';//Reactオブジェクトの中のComponent
//import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

class App extends Component{
  input='';

  msgStyle={
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }

  inputStyle = {
    fontSzie:"12pt",
    padding:"5px"
  }

  constructor(props){
    super(props);
    this.state={
      message:'type your name:'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event){
    this.input=event.target.value;
  }

  doSubmit(event){
    this.setState({
      message:'Hello,'+this.input+'!!'//メッセージを表示
    });
    event.preventDefault();//発生したイベントを無くす（実際にフォームが送信されることがなくなる）
  }
  
  render(){
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <form onSubmit={this.doSubmit}>
        <label>
          <span style={this.inputStyle}></span>Message:
          <input type="text" style={this.inputStyle} onChange={this.doChange}/>
        </label>
        <input type="submit" style={this.inputStyle} value="Click"/>
      </form>
    </div>
  }

  
}


export default App;//class Appを使えるようにエクスポートしておく
