import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardList from './Card';


const mapStateToProps = state => {
    return { results: state.results }
}

 class Results extends Component {
    render() {
        const results = this.props.results.map((result, index) =>
        <li key={index}>< CardList info={result} /></li>)
        return (
            <div>
                < Search />
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

const ResultList = connect(mapStateToProps)(Results)


export default ResultList; 