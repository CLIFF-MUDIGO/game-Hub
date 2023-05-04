import React, { useState, useEffect } from 'react';

function GamePage() {
  const [games, setGames] = useState([]);
  const [showGames, setShowGames] = useState(false);
  useEffect(() => {
    fetch('https://api.rawg.io/api/games?&ordering=-added&page_size=6&key=49390ff6fa084eeebc9d464dedbd6685')
      .then(response => response.json())
      .then(data => setGames(data.results));
  }, []);
  const updatedGames = [...games];
  const handleExploreClick = () => {
    setShowGames(true);
  };
  return (
    <div className="app">
      <main>
      <div name="hero">
          <section className="hero">
            <button onClick={handleExploreClick}>Explore</button>
          </section>
        </div>
        {showGames && (
          <div className='container'>
              {updatedGames.map(updatedGames => (
                <div key={updatedGames.id} className="game-card">
                  <img className='card' src={updatedGames.background_image} alt={updatedGames.name} />
                  <h3>{updatedGames.name}</h3>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
}
export default GamePage;