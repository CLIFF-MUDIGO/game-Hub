import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games }) => {
  return (
    <div className="game-list">
      <h2>Game List</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
