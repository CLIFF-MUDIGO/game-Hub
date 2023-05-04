import React, { useState, useEffect } from 'react';
import styles from './Gamepage.module.css';

function GamePage() {
  const [games, setGames] = useState([]);
  const [showGames, setShowGames] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=72255820f866438197617e0ae9a982cc')
      .then(response => response.json())
      .then(data => setGames(data.results));
  }, []);

  const handleExploreClick = () => {
    setShowGames(prevShowGames => !prevShowGames);
  };

  const handleAddToFavorites = (game) => {
    setFavorites([...favorites, game]);
  };

  const handleDeleteFavorite = (game) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== game.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className={styles['game-page']} id="game-page">
      <h2>Games</h2>
      <button onClick={handleExploreClick} className={styles['explore-button']}>
        {showGames ? 'Hide' : 'Explore'}
      </button>
      {showGames && (
        <div className={styles['container']}>
          {games.map(game => (
            <div key={game.id} className={styles['game-card']}>
              <img className={styles['card-image']} src={game.background_image} alt={game.name} />
              <h3 className={styles['card-title']}>{game.name}</h3>
              <p className={styles['card-text']}>Released: {game.released}</p>
              <p className={styles['card-text']}>Rating: {game.rating}</p>
              {favorites.find(favorite => favorite.id === game.id) ? (
                <button className={styles['delete-button']} onClick={() => handleDeleteFavorite(game)}>Remove from favorites</button>
              ) : (
                <button className={styles['add-button']} onClick={() => handleAddToFavorites(game)}>Add to favorites</button>
              )}
            </div>
          ))}
        </div>
      )}
      <div className={styles['favorites-container']}>
        <h3>Favorites:</h3>
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <div key={favorite.id} className={styles['favorite-card']}>
              <img className={styles['card-image']} src={favorite.background_image} alt={favorite.name} />
              <h3 className={styles['card-title']}>{favorite.name}</h3>
              <p className={styles['card-text']}>Released: {favorite.released}</p>
              <p className={styles['card-text']}>Rating: {favorite.rating}</p>
              <button className={styles['delete-button']} onClick={() => handleDeleteFavorite(favorite)}>Remove from favorites</button>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default GamePage;
