import React from 'react';
import PropTypes from 'prop-types';

const Type = ({ type }) => (
  <div className="type type-panel">
    <span>{type.name}</span>
  </div>
);

Type.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Type.defaultProps = {
  type: [{
    name: '',
    url: '',
  }],
};

export default Type;
