//Core
import { Map } from 'immutable';

//Reducer
import { authReducer } from '../reducer';

//Actions
import { authActions } from '../actions';

const initialState = Map({
	isAuthenticated: 	false,
	isInitialized: 		false
});