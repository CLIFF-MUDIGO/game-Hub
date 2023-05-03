import React from 'react';
import './GameList.css';

function GameList(props) {
  const games = props.games;

  return (
    <div className="game-list">
      <h2>Popular Games</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
