import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ ele }) => {
  const {
    strMeal, strCategory, strArea, strInstructions, strYoutube, strMealThumb,
  } = ele;

  const url = strMealThumb.replace(/^\+/i, '');

  return (
    <div>
      <p>
        Food Name:
        {strMeal}
      </p>
      <p>
        Category:
        {strCategory}
      </p>
      <p>
        Area:
        {strArea}
      </p>
      <p>
        Youtube Link
        {strYoutube}
      </p>
      <p>
        Instruction :
        {strInstructions}
      </p>
      <p>
        <img src={url} alt=" " />
      </p>
    </div>
  );
};

Food.propTypes = {
  ele: PropTypes.shape({
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strYoutube: PropTypes.string,
    strArea: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
};

Food.defaultProps = {
  ele: PropTypes.shape({
    strMeal: '1',
    strCategory: 'fhfh',
    strYoutube: '1',
    strArea: 'fhfh',
    strInstructions: '1',
    strMealThumb: '1',
  }),
};

export default Food;
