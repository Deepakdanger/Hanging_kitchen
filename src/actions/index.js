export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_FOOD = 'SELECT_FOOD';

export const selectCategoryAction = (ele) => ({
  type: SELECT_CATEGORY,
  ele,
});

export const selectFoodMenuAction = (ele) => ({
  type: SELECT_FOOD,
  ele,
});
