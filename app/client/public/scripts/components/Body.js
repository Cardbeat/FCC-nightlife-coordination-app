import React , { Component } from 'react';

export default class Body extends Component  {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            city: document.getElementById('data').value
        }
        fetch('/yelp/search', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
              }
        }).then(result => result.json().then(data => console.log(data)))
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
               <input id="data" type="text"  />
               </form>
            </div>
        )
    }
}