import logo from './logo.svg';
import './App.css';
import profileImg from './img/profile.png';
import Title1 from './component/1st_tutorial/Title1';
import Button1 from './component/1st_tutorial/Button1';
import React, { Component } from 'react'
import Test from './component/2nd_tutorial/Test';
import Test2 from './component/2nd_tutorial/Test2';
import Title3 from './component/3rd_tutorial/Title3';
import Button4 from './component/4th_tutorial/Demo4';
import PropTypes from 'prop-types';
import Title4 from './component/4th_tutorial/Title4';


class App extends Component {

  static childContextTypes = {
    themeColor: PropTypes.string,
    handleChangeColor : PropTypes.func,
  }

  handleChangeColor (color){
    this.setState({
      themeColor: color,
    })
  }

  getChildContext(){
    return {
      // title:"Big Title",
      themeColor : this.state.themeColor,
      handleChangeColor : (color) =>this.handleChangeColor(color),
    }
  }

  constructor(props) {
    super(props)
  
    this.state = {
       themeColor:'',
      //  isRenderTest: true,
    }
  }

  // handleClick (color){
  //   console.log(color)
  //   this.setState({
  //       themeColor: color,
  //   })
  // }
  
  render(){ 
    return (
      <div >

        <Title4></Title4>
        <Button4></Button4>

        {/* <Title3></Title3> */}

        {/* {this.state.isRenderTest ? <Test2></Test2> : "Not render test"} */}
        {/* <Test></Test> */}
        {/* <p>App</p> 
        <button type="button" onClick={() => this.setState({})}>App setState</button>
        <button type="button" onClick={() => this.setState({ isRenderTest: !this.state.isRenderTest})}>Switch Render Test</button> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        {/* <h2>App</h2>
        <Title1 themeColor={this.state.themeColor}></Title1>
        <Button1 themeColor={this.state.themeColor} handleClick={(color) => this.handleClick(color)}></Button1> */}
      </div>
    )
  }
}

export default App;
