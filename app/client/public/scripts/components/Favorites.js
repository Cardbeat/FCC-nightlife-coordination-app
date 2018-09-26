import React, { Component } from 'react';
import Search from './Search';
import CardList from './Card';


 export default class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            favorites: ['there"s no favorites']
        }

    }

    componentDidMount() {
        fetch('/yelp/search/favorites')
        .then(res => res.json()
        .then(favs => {
            this.setState({
                favorites: favs
            })
        }));
        
    }


    render() {
        const favs = this.state.favorites.map((fav, index) =>
        <li key={index}>< CardList info={fav} /></li>)
        return (
            <div>
                < Search />
                <ul>
                    {favs}
                </ul>
            </div>
        )
    }
}
