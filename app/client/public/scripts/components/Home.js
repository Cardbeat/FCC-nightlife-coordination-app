import React , { Component } from 'react';

export default class Home extends Component  {
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
            <div className="search">
               <form onSubmit={this.handleSubmit}>
               <label>
                   search:
                   <input id="data" type="text"  />
               </label>
               <input type="submit" value="Submit" />
               </form>
            </div>
        )
    }
}