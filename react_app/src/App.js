import React, {Component} from 'react';//Reactオブジェクトの中のComponent
//import logo from './logo.svg';
import './App.css';
import Rect from './Rect.js';

class App extends Component {
  render(){
    return<div>
      <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50"/>
      <Rect x="150" y="100" w="150" h="150" c="#f6f9"r="75"/>
      <Rect x="100" y="150" w="150" h="150" c="#6669" r="25"/>
    </div>;
  }
}




export default App;//class Appを使えるようにエクスポートしておく
