import React, {Component} from 'react';//Reactオブジェクトの中のComponent
//import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

class App extends Component {
  data=[];//配列を保管するプロパティ　doActionでクリックした位置の情報を追加する.

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }
  
  area = {
    width:"500px",
    height:"500px",
    padding:"1px solid blue",
  }

  constructor(props){
    super(props);
    this.state={//あくまでステートの初期化
      list:this.data
    };
    this.doAction=this.doAction.bind(this);
  }

    doAction(e){
      let x=e.pageX;//ページの左上からクリックした地点までの距離
      let y=e.pageY;//同様
      this.data.push({x:x,y:y});//{x:横位置,y:縦位置}をthis.dataにpushで追加
      this.setState({
        list:this.data//listステートに設定
      });
    }

    draw(d){
      let s={
        position:"absolute",
        left:(d.x-25)+"px",
        top:(d.y-25)+"px",
        width:"50px",
        height:"50px",
        backgroundColor:"#66f3",
      };
      return <div style={s}></div>
    }
  

  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show rect.</h2>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value)=>this.draw(value))}
      </div>
    </div>;
  }
}


export default App;//class Appを使えるようにエクスポートしておく
