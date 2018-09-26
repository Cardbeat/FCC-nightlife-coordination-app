import React, { Component } from 'react';
import { connect } from 'react-redux';
import osm from 'osm';

let map = osm();

const mapStateToProps = state => {
    return { favs: state.favs }
}

class Card extends Component {
    constructor() {
        super()
        this.state = {
            color: false,
            user: false,
            latitude: [],
            longitude: []
        }
        this.addFavorite = this.addFavorite.bind(this)
    }
    
    componentWillMount() {
        this.props.favs.map((fav) => {
            if(fav.alias == this.props.info.alias || window.location.href.search('fav') != -1) {
                this.setState({
                    color: true
                })
            }
        })

        fetch('/user')
            .then(res => res.json()
            .then(user => {
                this.setState({
                    user: user.user_authenticated,
                    longitude: this.props.info.coordinates.longitude,
                    latitude: this.props.info.coordinates.latitude,
                    address: this.props.info.location.address1
                })
            }));
    }


    addFavorite() {
        let data = {
                coordinates: {
                    longitude: this.props.info.coordinates.longitude,
                    latitude: this.props.info.coordinates.latitude
                },
                alias: this.props.info.alias,
                phone: this.props.info.phone,
                rating: this.props.info.rating,
                location: {
                    address1:this.props.info.location.address1
                },
                image_url: this.props.info.image_url,
                url: this.props.info.url,
                review_count: this.props.info.review_count
        };
        if(this.state.color) {
            this.setState({
                color: false
            })

            fetch('/user/remove', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                  }
            }).then(result => result.json().then(data => 
                console.log('added')
            ))

        } else {
            this.setState({
                color: true
            })

            fetch('/user/add', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                  }
            }).then(result => result.json().then(data => 
                console.log('added')
            ))
        }
    }


    render() {
        let pigment = this.state.color? 'blue' : 'gray'
        let color = {
            color: pigment
        }
        return (
            <div id="card">
                <ul className="banner">
                    <li className="items"><div id="openstreet"><div className='map' dangerouslySetInnerHTML={ {__html: osm().position(this.state.latitude, this.state.longitude).show().outerHTML}}></div></div></li>
                    <li className="items"><div id="photo"><img src={this.props.info.image_url} height="154" width="160" /></div></li>
                </ul>
                <div id="info">
                    <h6>{this.props.info.name}</h6> 
                    <div className="details">
                        <ul>
                        <li><i className="tiny material-icons">local_phone</i>: {this.props.info.phone}</li>
                        <li><i className="tiny material-icons">stars</i>: {this.props.info.rating}</li>
                        <li><i className="tiny material-icons">location_searching</i>: {this.state.address}</li>
                        <li><i className="tiny material-icons">rate_review</i>: <a href={this.props.info.url}>{this.props.info.review_count}</a></li>
                        </ul>
                        <a>{this.state.user? <i className="medium material-icons favorite" onClick={this.addFavorite} style={color}>favorite</i> : ''}</a>
                    </div>
                </div>
            </div>
        )
    }
}
// const Cards = connect(null, mapDispatchToProps)(Card)
const CardList = connect(mapStateToProps)(Card)


export default CardList;