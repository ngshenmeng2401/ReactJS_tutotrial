import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import Header from './realwebsite_tutorial/common/header/Header';
import store from './realwebsite_tutorial/store/index';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './realwebsite_tutorial/pages/home/HomePage';
import DetailsPage from './realwebsite_tutorial/pages/detail/DetailsPage';

class App extends Component {

  // static childContextTypes = {
  //   themeColor: PropTypes.string,
  //   handleChangeColor : PropTypes.func,
  // }

  // handleChangeColor (color){
  //   this.setState({
  //     themeColor: color,
  //   })
  // }

  // getChildContext(){
  //   return {
  //     // title:"Big Title",
  //     themeColor : this.state.themeColor,
  //     handleChangeColor : (color) =>this.handleChangeColor(color),
  //   }
  // }

  constructor(props) {
    super(props)
  
    this.state = {
      //  themeColor:'',
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
      <div>

        <GlobalStyle />
        <Provider store={store}>
          <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={HomePage}></Route>
                <Route path='/detail' exact component={DetailsPage}></Route>
              </div>
            </BrowserRouter>
        </Provider>
        

        {/* <Provider store={store}>
          <TodoListRedux2 />
        </Provider> */}

        {/* <Demo6/> */}

        {/* <TodoList /> */}

        {/* <Title4></Title4>
        <Button4></Button4> */}

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
