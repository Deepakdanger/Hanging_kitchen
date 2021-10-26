import React, { useState, useEffect } from 'react';

const Lists = () => {
  const [state, setState] = useState([]);

  const dataChange = (data) => {
    console.log(data);
    setState(data);
  };
  const url = 'www.themealdb.com/api/json/v1/1/categories.php';

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        resp.json();
      })
      .then((data) => dataChange(data),
        (error) => {
          console.log(error);
          console.warn(error.responseText);
        });
  }, []);

  return (
    <div className="lists">
      hello
      Lists of food type
      {state}
    </div>
  );
};

export default Lists;
