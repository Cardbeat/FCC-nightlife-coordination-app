import React from 'react';
import { render } from 'react-dom';
import Display from './components/Display.js';



export default class App  extends React.Component {
    render() {
      return(
        <div>
          < Display />
        </div>
      )
    }
  }
  

render(< App />, document.getElementById('app'))
  