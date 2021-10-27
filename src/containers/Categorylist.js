import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Categorylist = () => {
  const { category } = useSelector((state) => state);

  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  //   ESLINT_NO_DEV_ERRORS=true

  useEffect(() => {
    fetch(url + category)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(url + category);
      },
      (error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div>
      list
      {console.log('w', category)}
      {category}
    </div>
  );
};

export default Categorylist;
