import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Category from '../components/Category';
import { selectCategoryAction } from '../actions';

const Lists = () => {
  const [items, setItems] = useState([]);

  const dataChange = (data) => {
    setItems(data);
  };
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        dataChange(data);
      },
      () => {
      });
  }, []);

  const selectCategoryMenu = (ele) => dispatch(selectCategoryAction(ele));

  const printCategory = items.categories ? items.categories.map((ele) => (<Category key={`ele-${ele.idCategory}`} ele={ele} selectCategory={() => selectCategoryMenu(ele)} />)) : <p>hellllllo</p>;

  return (
    <div className="listss">
      <p className="select1">Select Category</p>
      <p className="select3">SELECT CATEGORY </p>
      <p className="select2">FROM</p>
      <p className="select2">HERE</p>
      <p className="select2">= = = &gt; </p>
      <div className="lists">
        {items.categories ? printCategory : <p>click</p>}
      </div>
    </div>
  );
};

export default Lists;
