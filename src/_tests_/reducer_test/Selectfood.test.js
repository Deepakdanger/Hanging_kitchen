import SelectFoodReducer from '../../reducers/Selectfood';
import { SELECT_FOOD } from '../../actions/index';

describe('SelectFoodReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SelectFoodReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SELECT_FOOD', () => {
    const action = {
      type: SELECT_FOOD,
      ele: { strMeal: 'BHAJI' },
    };
    const expectedState = 'BHAJI';

    expect(SelectFoodReducer({}, action) === '').toBe(false);
    expect(SelectFoodReducer({}, action)).toEqual(expectedState);
  });
});
