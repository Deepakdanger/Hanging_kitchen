import React from 'react';
import PropTypes from 'prop-types';

const Catagory = ({ ele, selectCategory }) => {
  const { idCategory, strCategory } = ele;
  return (
    <div>
      <span>{idCategory}</span>
      <span>{strCategory}</span>
      <button className="select" type="button" onClick={selectCategory}>Select</button>
    </div>
  );
};

Catagory.propTypes = {
  ele: PropTypes.shape({
    idCategory: PropTypes.string,
    strCategory: PropTypes.string,
  }),
  selectCategory: PropTypes.func.isRequired,
};

Catagory.defaultProps = {
  ele: PropTypes.shape({
    idCategory: '1',
    strCategory: 'fhfh',
  }),
};

export default Catagory;
