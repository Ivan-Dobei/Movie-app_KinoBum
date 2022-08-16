import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MovieReducer } from './reducers/MovieReducer';

const rootReducer = combineReducers({
   movie: MovieReducer
})

export const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);