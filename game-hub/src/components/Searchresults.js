import React, { useState } from 'react';
import styles from './Search.module.css';

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();

    const searchInput = e.target.elements.searchInput.value;

    fetch(`https://api.rawg.io/api/games?key=72255820f866438197617e0ae9a982cc&search=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResults(data.results);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className={styles['search-container']}>
      <form onSubmit={handleSearch} className={styles['search-form']}>
        <label>
          Search for a game:
          <input type="text" name="searchInput" className={styles['search-input']} />
        </label>
        <button type="submit" className={styles['search-button']}>Search</button>
      </form>
      <ul>
        {searchResults.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
