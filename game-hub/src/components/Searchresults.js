import {useState}from 'react'

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(e) {
    e.preventDefault();

    const searchInput = e.target.elements.searchInput.value;

    // Make the search request to the API
    fetch(`https://api.rawg.io/api/games?key=72255820f866438197617e0ae9a982cc&search=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResults(data.results);
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Search for a game:
          <input type="text" name="searchInput" />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search