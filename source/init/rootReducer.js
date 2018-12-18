//Core
import { combineReducers } from 'redux';

//Reducers
import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { authReducer as auth } from '../bus/auth/reducer';

export const rootReducer = combineReducers({
	auth,
	ui,
	posts,
})