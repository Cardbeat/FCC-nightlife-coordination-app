import React from 'react';
import { render } from 'react-dom';



export default class Welcome  extends React.Component {
    render() {
      return(
        <div>
          <h1> ola </h1>
        </div>
      )
    }
  }
  

render(< Welcome />, document.getElementById('app'))
  