import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Food from '../components/Food';

const FoodContainer = () => {
  const [foodItems, setFoodItems] = useState([]);
  const { food } = useSelector((state) => state);

  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    fetch(url + food)
      .then((resp) => resp.json())
      .then((data) => {
        setFoodItems(data.meals);
      },
      (error) => {
        console.log(error);
      });
  }, [food]);
  console.log(foodItems);

  const printFood = foodItems ? foodItems.map((ele) => (<Food key={`ele-${ele.idMeal}`} ele={ele} />)) : <p>hellllllo</p>;

  return (
    <div>
      FoooD
      {food}
      {console.log(printFood)}
      {foodItems ? printFood : <p>click</p>}
    </div>
  );
};

export default FoodContainer;
