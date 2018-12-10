import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import {getData, randomise} from './actions/data'
import Card from './components/Card'


class App extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return (
            <div className='App'>
                <div className='line-break'/>
                <button className='button' onClick={this.props.randomise}>Randomize</button>
                <Card events={this.props.events} randomise={this.props.randomise}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    events: state.data.filteredEvents,
});

const mapDispatchToProps = {
    getData,
    randomise
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);

