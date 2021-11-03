import SelectCategoryReducer from '../../reducers/Selectcategory';
import { SELECT_CATEGORY } from '../../actions/index';

describe('SelectCategoryReducer function', () => {
  it('should return the initial state', () => {
    const action = { type: 'dummy_action' };
    const initialState = '';
    expect(SelectCategoryReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle SELECT_CATEGORY', () => {
    const action = {
      type: SELECT_CATEGORY,
      ele: { strCategory: 'Food' },
    };
    const expectedState = 'Food';
    expect(SelectCategoryReducer({}, action) === '').toBe(false);
    expect(SelectCategoryReducer({}, action)).toEqual(expectedState);
  });
});
