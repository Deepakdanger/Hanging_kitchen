import React from 'react';
import PropTypes from 'prop-types';

const Food = ({ ele }) => {
  const {
    strMeal, strCategory, strArea, strInstructions, strYoutube, strMealThumb,
  } = ele;

  return (
    <div className="food">
      <div className="food_discription">
        <p>
          Food Name :
          {strMeal}
        </p>
        <p>
          Category :
          {strCategory}
        </p>
        <p>
          Area :
          {strArea}
        </p>
        <p>
          Youtube link :
          <a href={strYoutube}>{strYoutube}</a>
        </p>
        <p>
          Instruction :
          {strInstructions}
        </p>
      </div>
      <div className="food_url_discription">
        <p className="food_img">
          <img src={strMealThumb} alt=" " />
        </p>
      </div>
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
