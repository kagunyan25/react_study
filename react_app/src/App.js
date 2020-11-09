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

  constructor(props){
    super(props);
    this.state={
      message:'type your name:'
    };
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event){
    alert(event.target.value+"は長すぎます.（最大10文字）");
  }
  
  render(){
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <Message maxlength="10" onCheck={this.doCheck}/>
    </div>
  }

}

class Message extends Component{
  inputStyle={
    fontSize:"12pt",
    padding:"5px"
  }

  constructor(props){
    super(props);
    this.doChange=this.doChange.bind(this);//doChangeをコンポーネントで使えるよう設定
  }

  doChange(e){
    if(e.target.value.length>this.props.maxlength){//問題
      this.props.onCheck(e);//onCheckを実行
      e.target.value=e.target.value.substr(0,this.props.maxlength);
    }
  }

  render(){
    return <input type="text" style={this.inputStyle}
    onChange={this.doChange}/>
    }//onChangeで値が変更されるとdoChangeが実行されるようになっている
}


export default App;//class Appを使えるようにエクスポートしておく
