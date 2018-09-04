import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = state => {
    return { results: state.results }
}

 class Results extends Component {
    render() {
        return (
            <div>
                < Search />
                <ul>
                    {this.props.results.map((result, index) => <li key={index}>{result.name}</li>)}
                </ul>
            </div>
        )
    }
}

const ResultList = connect(mapStateToProps)(Results)


export default ResultList; 