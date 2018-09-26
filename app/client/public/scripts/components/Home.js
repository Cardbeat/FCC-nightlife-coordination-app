import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addResults } from '../actions/addResults';
import { Redirect } from 'react-router';

const mapDispatchToProps = dispatch => {
    return {
        addResults: results => dispatch(addResults(results))
    }
}

 class HomePage extends Component  {
    constructor() {
        super()
        this.state = {
            toResults: false
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
                toResults: true
            })
        ))
    }
    render() {
        if(this.state.toResults === true ) {
            return <Redirect to='/results' />
        }
        return (
            <div className={this.props.position}>
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

const Home = connect(null, mapDispatchToProps)(HomePage)

export default Home 