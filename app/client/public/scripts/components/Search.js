import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addResults } from '../actions/addResults';

const mapDispatchToProps = dispatch => {
    return {
        addResults: results => dispatch(addResults(results))
    }
}

 class SearchList extends Component  {
    constructor() {
        super()
        this.state = {
            lastSearch: []
        }
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
        }).then(result => result.json().then(data => 
            this.props.addResults(data),
            this.setState({
                lastSearch: document.getElementById('data').value
            }),
            localStorage.setItem("lastSearch", data.city)
        ))
    }
    render() {
        return (
            <div className="top">
               <form onSubmit={this.handleSubmit}>
               <label>
                   search:
                   <input id="data" type="text"  defaultValue={localStorage.getItem("lastSearch")}/>
               </label>
               <input type="submit" value="Submit" />
               </form>
            </div>
        )
    }
}

const Search = connect(null, mapDispatchToProps)(SearchList)

export default Search 