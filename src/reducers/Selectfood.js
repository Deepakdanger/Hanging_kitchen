import { SELECT_FOOD } from '../actions/index';

const SelectFoodReducer = (state = '', action) => {
  switch (action.type) {
    case SELECT_FOOD:
      return action.ele.strMeal;
    default:
      return state;
  }
};
export default SelectFoodReducer;
