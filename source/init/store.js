//Core
import { createStore } from 'redux';

//Reducer
import { rootReducer } from './rootReducer';

//Enhancer
import { enhancedStore } from './middleWare/core'
export const store = createStore(rootReducer, enhancedStore);
