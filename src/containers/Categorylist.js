import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Categoryfood from '../components/Categoryfood';
import { selectFoodMenuAction } from '../actions';

const Categorylist = () => {
  const { category } = useSelector((state) => state);

  const [categoryItems, setCategoryItems] = useState([]);

  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url + category)
      .then((resp) => resp.json())
      .then((data) => {
        setCategoryItems(data);
      },
      () => {

      });
  }, [category]);

  const selectFoodMenu = (ele) => dispatch(selectFoodMenuAction(ele));

  const categoryFood = categoryItems.meals ? categoryItems.meals.map((ele) => (<Categoryfood key={`ele-${ele.idMeal}`} ele={ele} selectFood={() => selectFoodMenu(ele)} />)) : <p>hello111</p>;

  return (
    <div className="meals">
      <p className="meals_title">
        List of Meals :
        {category}
      </p>
      <div className="meals_discription">
        {categoryFood}
      </div>
    </div>
  );
};

export default Categorylist;
