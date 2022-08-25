import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BurgerReducer } from './reducers/BurgerReducer';
import { MovieReducer } from './reducers/MovieReducer';

const rootReducer = combineReducers({
   movie: MovieReducer,
   burger: BurgerReducer
})

export const store = createStore(rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
);