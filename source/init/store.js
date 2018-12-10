//Core
import { createStore } from 'redux';

//Roots
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

//Middleware
import { enhancedStore, sagaMiddleware } from './middleWare/core';
export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
