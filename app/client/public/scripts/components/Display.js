import React, { Component} from 'react';
import Header from './Header';
import Body from './Home'
import Favorites from './Favorites';
import Results from './Results';
import Home from './Home';
import {Route, Link} from 'react-router-dom';

export default class Display extends Component {
    render() {
        return (
            <div>
                < Header />
                <Route path="/fav" component={Favorites} />
                <Route path="/results" component={Results} />
                <Route path="/" component={Home} />
            </div>
        )
    }
}