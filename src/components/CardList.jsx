import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

const CardList = ({ cards }) => (
  <div className="cards-wrapper">
    {cards.map(card => (
      <Card key={card.id} className="card-item simple-card-wide mdl-card mdl-shadow--2dp" {...card} />
    ))}
  </div>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    id: PropTypes.number,
  })),
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
