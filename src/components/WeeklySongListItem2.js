import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WeeklySongListItem2.css';

function WeeklySongListItem2() {
  const { order, title, singer, viewCount } = this.props;
  return <div className="WeeklySongListItem2">
    <div className="order">{order}</div>
    <div className="info">
      <p className="title">{title}</p>
      <p className="singer">{singer}</p>
    </div>
    <div className="view-count">{viewCount.toLocaleString()}</div>
  </div>
}

WeeklySongListItem2.defaultProps = {
  viewCount: 0
};

WeeklySongListItem2.propTypes = {
  order: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  /** View count */
  viewCount: PropTypes.number
};

export default WeeklySongListItem2;