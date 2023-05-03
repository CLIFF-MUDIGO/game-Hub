import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { Link, Element } from 'react-scroll';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?dates=2019-01-01,2021-01-01,2021-12-31&ordering=-added&page_size=6&key=49390ff6fa084eeebc9d464dedbd6685')
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
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="games" smooth={true} duration={500}>
                Games
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Element name="hero">
          <section className="hero">
            <h2>Welcome to our game website</h2>
            <p>Discover new games, read reviews, and join the gaming community.</p>
            <button>Explore</button>
          </section>
        </Element>
        <Element name="games">
          <section className="slider-container">
            <Slider {...settings}>
              {games.map(game => (
                <div key={game.id} className="slider-item">
                  <img src={game.background_image} alt={game.name} />
                  <h3>{game.name}</h3>
                </div>
              ))}
            </Slider>
          </section>
        </Element>
        <Element name="about">
          <section className="about">
            <h2>About us</h2>
            <p>We are a team of passionate gamers who love to share our experience and knowledge with fellow gamers. Our goal is to create a community where gamers can connect, share and learn from one another. </p>
          </section>
        </Element>
      </main>
      <footer>
        <p>© 2023 Game Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
