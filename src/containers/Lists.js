import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Catagory from '../components/Category';
import { selectCategoryAction } from '../actions';

const Lists = () => {
  const [items, setItems] = useState([]);

  const dataChange = (data) => {
    setItems(data);
    console.log(data);
    console.log(items);
  };
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        dataChange(data);
      },
      (error) => {
        console.log(error);
      });
  }, []);

  const selectCategoryMenu = (ele) => dispatch(selectCategoryAction(ele));

  const printCategory = items.categories ? items.categories.map((ele) => (<Catagory key={`ele-${ele.idCategory}`} ele={ele} selectCategory={() => selectCategoryMenu(ele)} />)) : <p>hellllllo</p>;

  return (
    <div className="lists">
      hello
      Lists of food
      {items.categories ? printCategory : <p>click</p>}
    </div>
  );
};

export default Lists;
