import React from 'react';
import { render } from 'react-dom';
import Display from './components/Display.js';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import index from "./teste"




export default class App  extends React.Component {
    render() {
      return(
        <Provider store={store}>
          <Router>
            <div>
              < Display />
            </div>
          </Router>
        </Provider>
      )
    }
  }
  

render(< App />, document.getElementById('app'))
  