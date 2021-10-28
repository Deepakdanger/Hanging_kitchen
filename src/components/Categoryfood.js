import React from 'react';
import PropTypes from 'prop-types';

const Catagoryfood = ({ ele, selectFood }) => {
  const { idMeal, strMeal } = ele;
  return (
    <div>
      <span>{idMeal}</span>
      <span>{strMeal}</span>
      <button className="select" type="button" onClick={selectFood}>Select</button>
    </div>
  );
};

Catagoryfood.propTypes = {
  ele: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
  }),
  selectFood: PropTypes.func.isRequired,
};

Catagoryfood.defaultProps = {
  ele: PropTypes.shape({
    idMeal: '1',
    strMeal: 'fhfh',
  }),
};

export default Catagoryfood;
