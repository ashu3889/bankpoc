import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import CounterBody from './component/counterbody.js';
import { Provider } from "react-redux";
import Store from './reducer/combo_reducer.js';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Provider store={Store}>
         <CounterBody/>
      </Provider>     
       
      </div>
    );
  }
}

export default App;
