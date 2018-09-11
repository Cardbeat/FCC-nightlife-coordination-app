import React, { Component } from 'react';
import ResultList from './Results';

export default class Card extends Component {
    render() {
        return (
            <div id="card">
                <div id="openstreet"></div>
                <div id="photo"><img src={this.props.info.image_url} height="180" width="180" /></div>
                <div id="info">
                    <ul>
                        <li> name :{this.props.info.name}</li>
                        <li> phone: {this.props.info.phone}</li>
                        <li>rating: {this.props.info.rating}</li>
                        <li>location : {this.props.info.location.address1}</li>
                        <li><a href={this.props.info.url}>{this.props.info.review_count}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}