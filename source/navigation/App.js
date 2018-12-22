// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

// Routes
import Private from './Private';
import Public from './Public';

//Actions 
import { authActions } from '../bus/auth/actions'

//Components
import { Loading } from '../components';

const mapStateToProps = (state) => {
    return{
        isAuthenticated:    state.auth.get('isAuthenticated'),
        isInitialized:      state.auth.get('isInitialized'),
    }
}

const mapDispatchToProps = {
	initializeAsync: authActions.initializeAsync,
}

@hot(module)
@withRouter
@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class App extends Component {
    componentDidMount() {
    	this.props.initializeAsync();
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if (!isInitialized) {
        	return <Loading />;
        }

        return isAuthenticated ? <Private /> : <Public />;
    }
}
