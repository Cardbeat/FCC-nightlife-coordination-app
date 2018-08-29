import React, { Component } from 'react';


export default class Header extends Component {
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
                    user: user
                })
            }));
    }

    render() {
        let status;
        if(this.state.user) {
           status =  <div>
                <li><a href="/fav">favorites</a></li>
                <li><a href="/oauth/logout">logout</a></li>
                </div>
        } else {
            status = <li><a href="/oauth/google">login with Google+</a></li>
        }
        return (
        <div>
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <a  className="brand-logo">NightLife</a>
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