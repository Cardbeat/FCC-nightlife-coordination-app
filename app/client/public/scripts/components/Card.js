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
            color: false
        }
        this.addFavorite = this.addFavorite.bind(this)
    }

    componentDidMount() {
        if(this.props.favs.includes(this.props.info.alias)) {
            this.setState({
                color: true
            })
        }
    }


    addFavorite() {
        let data = {
            place : this.props.info.alias
        }
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
        let longitude = this.props.info.coordinates.longitude;
        let latitude = this.props.info.coordinates.latitude;
        map = osm().position(latitude ,longitude);
        let pigment = this.state.color? 'blue' : 'gray'
        let color = {
            color: pigment
        }
        return (
            <div id="card">
                <ul className="banner">
                    <li className="items"><div id="openstreet"><div className='map' dangerouslySetInnerHTML={ {__html: map.show().outerHTML}}></div></div></li>
                    <li className="items"><div id="photo"><img src={this.props.info.image_url} height="154" width="160" /></div></li>
                </ul>
                <div id="info">
                    <h6>{this.props.info.name}</h6> 
                    <div className="details">
                        <ul>
                        <li><i className="tiny material-icons">local_phone</i>: {this.props.info.phone}</li>
                        <li><i className="tiny material-icons">stars</i>: {this.props.info.rating}</li>
                        <li><i className="tiny material-icons">location_searching</i>: {this.props.info.location.address1}</li>
                        <li><i className="tiny material-icons">rate_review</i>: <a href={this.props.info.url}>{this.props.info.review_count}</a></li>
                        </ul>
                        <a><i className="medium material-icons favorite" onClick={this.addFavorite} style={color}>favorite</i></a>
                    </div>
                </div>
            </div>
        )
    }
}
// const Cards = connect(null, mapDispatchToProps)(Card)
const CardList = connect(mapStateToProps)(Card)


export default CardList;