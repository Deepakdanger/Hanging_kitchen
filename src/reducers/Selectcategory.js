import { SELECT_CATEGORY } from '../actions/index';

const SelectCategoryReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.ele.strCategory;
    default:
      return state;
  }
};
export default SelectCategoryReducer;
