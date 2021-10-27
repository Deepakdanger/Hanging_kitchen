import React, { useState, useEffect } from 'react';
import Catagory from './Category;

const Lists = () => {
  const [items, setItems] = useState([]);

  const dataChange = (data) => {
    setItems(data);
    console.log(data);
    console.log(items);
  };
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

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
  console.log(items);

  const printCategory = items.categories.map((ele) => (<Catagory key={`ele-${ele.idCategory}`} ele={ele} />));

  return (
    <div className="lists">
      hello
      Lists of food
      {items.categories ? { printCategory } : <p>click</p>}
    </div>
  );
};

export default Lists;
