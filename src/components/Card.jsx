import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ className, imgUrl, title, msg }) => (
  <div className={className}>
    <div
      className="mdl-card__title"
      style={{ background: `url(${imgUrl}) center/cover` }}
    >
      <h2 className="mdl-card__title-text">{title}</h2>
    </div>
    <div className="mdl-card__supporting-text">{msg}</div>
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  msg: PropTypes.string,
};

Card.defaultProps = {
  className: null,
  imgUrl: null,
  title: null,
  msg: null,
};

export default Card;
