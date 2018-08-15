import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <a href="#!" className="brand-logo">NightLife</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/oauth/google">login with Google+</a></li>
                        <li><a href="/oauth/logout">logout</a></li>
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