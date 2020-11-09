import React, {Component} from 'react';//Reactオブジェクトの中のComponent
//import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

let theme={
  light:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px",
  },
  dark:{
    backgroundColor:"#006",
    color:"#eef",
    padding:"10px",
  }
};

const ThemeContext = React.createContext(theme.dark);


class App extends Component{
  static contextType = ThemeContext;

  render(){
    return(
      <div style={this.context}>
        <Title value="Content page"/>
        <Message value="This is Content sample."/>
        <Message value="※これはテーマのサンプルです."/>
      </div>
    );
  }
}

class Title extends Component{
  static contextType = ThemeContext;

  render(){
    return(
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}

class Message extends Component{
  static contextType = ThemeContext;//コンテキストが使えるようになる

  render(){
    return(
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    );
  }
}

export default App;//class Appを使えるようにエクスポートしておく
