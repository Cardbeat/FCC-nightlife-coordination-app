import React from 'react';
import { render } from 'react-dom';
import Display from './components/Display.js';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';



export default class App  extends React.Component {
    render() {
      return(
        <Router>
          <div>
            < Display />
          </div>
        </Router>
      )
    }
  }
  

render(< App />, document.getElementById('app'))
  