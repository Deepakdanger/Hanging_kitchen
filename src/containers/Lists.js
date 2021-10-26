import React, { useState } from 'react';

const Lists = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => dataChange(data),
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        });
  }, []);

  const dataChange = (data) => {
    console.log(data);
    setState(data);
  };

  return (
    <div className="lists">
      hello
      Lists of food type
      {state}
    </div>
  );
};

export default Lists;
