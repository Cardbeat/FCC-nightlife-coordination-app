import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
import Favorites from './Favorites';
import { addFavs } from '../actions/addFavs';
import { connect } from 'react-redux';



const mapDispatchToProps = dispatch => {
    return {
        addFavs: favs => dispatch(addFavs(favs))
    }
}

class Header extends Component {
    constructor() {
        super()
        this.state = {
            user: false
        }

    }

    componentWillMount() {
        fetch('/user')
            .then(res => res.json()
            .then(user => {
                this.setState({
                    user: user.user_authenticated
                })
                this.props.addFavs(user.favs)
            }));
    }

    render() {
        let status;
        if(this.state.user) {
           status =  <div>
                <li><Link to="/fav">favorites</Link></li>
                <li><a href="/oauth/logout">logout</a></li>
                </div>
        } else {
            status = <li><a href="/oauth/google">login with Google+</a></li>
        }
        return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <a  className="brand-logo" href="/">NightLife</a>
                    <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {status}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/oauth/google">login with Google</a></li>
                <li><a href="/oauth/logout">logout</a></li>
            </ul>
        </div>
        )
    }
}

const HeaderBar = connect(null, mapDispatchToProps)(Header)

export default HeaderBar