import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import SelectCategoryReducer from './Selectcategory';
import SelectFoodReducer from './Selectfood';

const rootReducer = combineReducers({
  category: SelectCategoryReducer,
  food: SelectFoodReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  category: '',
  food: 'Corba',
};

const store = createStore(
  rootReducer, initialState,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
