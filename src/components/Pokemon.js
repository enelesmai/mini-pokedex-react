import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => {
  const [data, setData] = useState({ img: '' });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        pokemon.url,
      );
      setData({
        order: result.data.order,
        img: result.data.sprites.other['official-artwork'].front_default,
      });
    };
    fetchData();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h3>
          #
          {data.order}
          :
          <span>{ pokemon.name }</span>
        </h3>
      </div>
      <div className="imgPokemon">
        <img alt={pokemon.name} src={data.img} />
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Pokemon.defaultProps = {
  pokemon: [{
    name: '',
    url: '',
  }],
};

export default Pokemon;
