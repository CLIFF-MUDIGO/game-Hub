import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Reviews from "./Reviews";
import GamePage from './Gamepage';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=72255820f866438197617e0ae9a982cc`)
      .then(response => response.json())
      .then(data => setGames(data.results));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="app">
      <header>
        <h1>Game Website</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#games">
                Games
              </a>
            </li>
            <li>
              <a href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="home" id="home">
          <h2>Welcome to our game website</h2>
          <p>Discover new games, read reviews, and join the gaming community.</p>
          <button>Explore</button>
        </section>
        <section className="slider-container" id="games">
          {games.length > 0 ?
            <Slider {...settings}>
              {games.map(game => (
                <div key={game.id} className="slider-item">
                  <img src={game.background_image} alt={game.name} style={{ width: "70%" }} />
                  <h3>{game.name}</h3>
                </div>
              ))}
            </Slider>
            :
            <div>Loading...</div>
          }
        </section>
        <section className="about" id="about">
          <h2>About us</h2>
        </section>
        <section className="contact" id="contact">
          <h2>Contact us</h2>
          <p>Follow us on Instagram:</p>
          <a href="https://www.instagram.com/el._smash/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span>el._smash</span>
          </a>
        </section>
        <GamePage />
        <Reviews />
        
      </main>
      <footer>
        <p>© 2023 Game Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
