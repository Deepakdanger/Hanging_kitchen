import { createStore, combineReducers } from 'redux';
import SelectCategoryReducer from './Selectcategory';

const rootReducer = combineReducers({
  category: SelectCategoryReducer,
});

const initialState = {
  category: [
    { categoryname: '' },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
