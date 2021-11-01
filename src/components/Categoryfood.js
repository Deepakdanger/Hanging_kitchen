import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Catagoryfood = ({ ele, selectFood }) => {
  const { strMealThumb, strMeal } = ele;
  return (
    <div className="meals_dish swing">
      <div className="meals_img_div">
        <img className="meals_img" src={strMealThumb} alt="NA" />
      </div>
      <Link to="/food">
        <button className="category_name" type="button" onClick={selectFood}>{strMeal}</button>
      </Link>
    </div>
  );
};

Catagoryfood.propTypes = {
  ele: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }),
  selectFood: PropTypes.func.isRequired,
};

Catagoryfood.defaultProps = {
  ele: PropTypes.shape({
    strMealThumb: '1',
    strMeal: 'fhfh',
  }),
};

export default Catagoryfood;
