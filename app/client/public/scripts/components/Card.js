import React, { Component } from 'react';
import ResultList from './Results';
import osm from 'osm';

let map = osm();

export default class Card extends Component {
    // try to finish this tomorrow
    // make the favorite button and send the name to the server, like an API call
    // make a real good looking card 
    render() {
        let longitude = this.props.info.coordinates.longitude;
        let latitude = this.props.info.coordinates.latitude;
        map = osm().position(latitude ,longitude);
        console.log(map.show())
        return (
            <div id="card">
                <div id="openstreet"><div className='map' dangerouslySetInnerHTML={ {__html: map.show().outerHTML}}></div></div>
                <div id="photo"><img src={this.props.info.image_url} height="160" width="160" /></div>
                <div id="info">
                    <ul>
                        <li>{this.props.info.name}</li>
                        <li> phone: {this.props.info.phone}</li>
                        <li>rating: {this.props.info.rating}</li>
                        <li>location : {this.props.info.location.address1}</li>
                        <li>reviews:<a href={this.props.info.url}>{this.props.info.review_count}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}