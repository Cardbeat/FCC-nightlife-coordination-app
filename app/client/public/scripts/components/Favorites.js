import React, { Component } from 'react';
import CardList from './Card';


 export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favorites: ['there"s no favorites']
        }

    }

    componentWillMount() {
        fetch('/user/favorites')
            .then(res => res.json()
            .then(user => {
                this.setState({
                    favorites: user
                })
            }));
    }


    render() {
        const favs = this.state.favorites.map((fav, index) =>
        <li key={index}>< CardList info={fav} /></li>)
        return (
            <div>
                <ul>
                    {favs}
                </ul>
            </div>
        )
    }
}
