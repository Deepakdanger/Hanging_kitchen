import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Categoryfood = ({ ele, selectFood }) => {
  const { strMealThumb, strMeal, idMeal } = ele;
  const first1 = '/food/';
  return (
    <div className="meals_dish swing">
      <div className="meals_img_div">
        <img className="meals_img" src={strMealThumb} alt="NA" />
      </div>
      <Link to={first1 + idMeal}>
        <button className="category_name" type="button" onClick={selectFood}>{strMeal}</button>
      </Link>
    </div>
  );
};

Categoryfood.propTypes = {
  ele: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    idMeal: PropTypes.string,
  }),
  selectFood: PropTypes.func.isRequired,
};

Categoryfood.defaultProps = {
  ele: PropTypes.shape({
    strMealThumb: '1',
    strMeal: 'fhfh',
    idMeal: '1234',
  }),
};

export default Categoryfood;
