import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shortid } from 'shortid';
import { useParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';

const PokemonList = () => {
  const { id } = useParams();
  const [pokemonList, setPokemonList] = useState({ pokemon: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://pokeapi.co/api/v2/type/${id}`,
      );
      // eslint-disable-next-line no-console
      console.log(result.data);
      const n = 12;
      const sample = result.data.pokemon
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, n);
      setPokemonList({ pokemon: sample });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>
        <span><a className="Link" href="/">&lt;</a></span>
        Type:
        { ` ${id}` }
      </h2>
      <div>
        <div className="GridLayout">
          {
            pokemonList.pokemon.map(p => (
              <div key={shortid} className="PokemonBox">
                <Pokemon key={shortid} pokemon={p.pokemon} />
              </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
