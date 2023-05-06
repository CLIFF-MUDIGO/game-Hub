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
        const firstResult = data.results[0];
        setSearchResults([{
          title: firstResult.name,
          description: firstResult.description_raw,
          rating: firstResult.rating,
          released: firstResult.released,
          image: firstResult.background_image
        }]);
      })
      .catch(error => console.error(error));
  }
  return (
    <div className={styles['search-container']}>
      <form onSubmit={handleSearch} className={styles['search-form']}>
        <label>
          <input type="text" name="searchInput" placeholder='searchgames' className={styles['search-input']} />
        </label>
        <button type="submit" className={styles['search-button']}>Search</button>
      </form>
      <div className={styles['card-container']}>
        {searchResults.map((result, index) => (
          <div key={index} className={styles['card']}>
            <img src={result.image} alt={result.title} className={styles['card-image']} />
            <div className={styles['card-content']}>
              <h2 className={styles['card-title']}>{result.title}</h2>
              <p className={styles['card-description']}>{result.description}</p>
              <div className={styles['card-details']}>
                <p><strong>Rating:</strong> {result.rating}</p>
                <p><strong>Released:</strong> {result.released}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Search;