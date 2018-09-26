import React, { Component} from 'react';
import HeaderBar from './Header';
import Favorites from './Favorites';
import Results from './Results';
import Home from './Home';
import { Route } from 'react-router-dom';

export default class Display extends Component {
    render() {
        return (
            <div>
                < HeaderBar />
                <Route path="/" exact render={(props) => < Home {...props} position={'search'}  /> } />
                <Route path="/fav" component={Favorites} />
                <Route path="/results" component={Results} />
            </div>
        )
    }
}