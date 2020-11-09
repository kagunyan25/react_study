import React, {Component} from 'react';//Reactオブジェクトの中のComponent
//import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

class App extends Component{
  imput='';

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
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event){
    this.input=event.target.value;
  }

  doSubmit(event){
    this.setState({
      message:'Hello,'+this.input+'!!'
    });
    event.preventDefault();
  }
  
  render(){
    return <div>
      <h1>React</h1>
      <Message title = "Children!">
        これはコンポーネントないのコンテンツです.
        マルでテキストを分割し、リストにして表示します.
        改行は必要ありません.
      </Message>
    </div>
  }

  
}

class Message extends Component{
  li = {
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding:"0px",
  }

  render(){
    let content = this.props.children;//messageコンポーネントの中のテキストを取り出す
    let arr = content.split('.');//'.'で分割し配列を作成し、配列arrに取り出す
    let arr2 =[];
    for(let i=0;i<arr.length;i++){
      if(arr[i].trim() !=''){
        arr2.push(arr[i]);
      }
    }

    let list = arr2.map((value,key)=>(//配列のテキストを<li>エレメントの配列に変換したものをlistに挿入
      <li style = {this.li} key = {key}>{value}.</li>)
      );
      return <div>
        <h2>{this.props.title}</h2>  
        <ol>{list}</ol>
      </div>
  }
}

export default App;//class Appを使えるようにエクスポートしておく
