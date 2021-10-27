import React from 'react';
import { useSelector } from 'react-redux';

const Categorylist = () => {
  const category = useSelector((state) => state.category.categoryname);
  console.log('help me', category);

  // useEffect(() => {
  //     fetch(url)
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         dataChange(data);
  //       },
  //       (error) => {
  //         console.log(error);
  //       });
  //   }, []);

  return (
    <div>
      list
      {category}
    </div>
  );
};

export default Categorylist;
