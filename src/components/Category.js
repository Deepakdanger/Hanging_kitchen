import React from 'react';
import PropTypes from 'prop-types';

const Catagory = ({ ele, selectCategory }) => {
  const { strCategoryThumb, strCategory } = ele;
  return (
    <div className="category_list swing">
      <img className="category_img" src={strCategoryThumb} alt="NA" />
      <button className="category_name" type="button" onClick={selectCategory}>{strCategory}</button>
    </div>
  );
};

Catagory.propTypes = {
  ele: PropTypes.shape({
    strCategoryThumb: PropTypes.string,
    strCategory: PropTypes.string,
  }),
  selectCategory: PropTypes.func.isRequired,
};

Catagory.defaultProps = {
  ele: PropTypes.shape({
    strCategoryThumb: '1',
    strCategory: 'fhfh',
  }),
};

export default Catagory;
