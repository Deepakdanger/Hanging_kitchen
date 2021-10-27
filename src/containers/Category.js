import React from 'react';
import PropTypes from 'prop-types';

const Catagory = ({ ele }) => {
  const { idCategory, strCategory } = ele;
  return (
    <div>
      <span>{idCategory}</span>
      <span>{strCategory}</span>
    </div>
  );
};
Catagory.propTypes = {
  ele: PropTypes.shape({
    idCategory: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }),
};

export default Catagory;
