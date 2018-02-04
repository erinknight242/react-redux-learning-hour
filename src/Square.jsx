import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ onClick, value }) => (
  <div className="square" onClick={onClick}>
    {value}
  </div>
);

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Square.defaultProps = {
  value: null,
};

export default Square;
