//Core
import { fromJS, List } from 'immutable';

//Instruments
import { types } from './types';

const initialState = List(); // []

const list1 = List([1, 2, 3]);

const list2 = list1.push(4);




export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FILL_POSTS:
			return fromJS(action.payload);

		case types.CREATE_POST:
			return state.unshift(fromJS(action.payload));


		case types.REMOVE_POST:
			return state.filter((post) => action.payload !== post.get('id'));
	
		case types.LIKE_POST:
			return state.updateIn([state.findIndex((post) => {
				return post.get('id') === action.payload.postId
			}),
			'likes'
		], likes => {
			return likes.unshift(action.payload.liker);
		});

		case types.UNLIKE_POST:
			return state.updateIn([state.findIndex((post) => {
				return post.get('id') === action.payload.postId
			}),
			'likes'
		], likes => {
			return likes.filter((liker) => {
				liker.get('id') !== action.payload.postId 
			})
		});
	
		case types.CLEAR_POSTS:
			return state.clear();
			
		default:
			return state;
	}
}