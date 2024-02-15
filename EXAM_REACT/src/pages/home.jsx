import { useState, useEffect } from "react";
import Film from "../Components/Film/Film.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "../Components/Header/Header.jsx";
import logo from "../assets/thor.jpg";
import "../style.css";

function App() {
  const KEY_API = "c8bf288bee8edc7e6ac610fda396d4d4";
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c8bf288bee8edc7e6ac610fda396d4d4&language=fr-FR&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, []);
  /*
    const helloList = films.map((film) => {
        <Film
           data={movie}
           />
    });
*/
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700&display=swap"
      />
      <nav class="desktop-nav">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-..."
          crossorigin="anonymous"
        />
        <a href="index.html">
          <i class="fas fa-film" aria-hidden="true"></i>
        </a>
        <ul>
          <li>
            <a href="">Films</a>
          </li>
          <li>
            <a href="">Séries</a>
          </li>
          <li>
            <a href="">Populaires</a>
          </li>
        </ul>
      </nav>

      <div class="search-container">
        {/* <h1><img src={logo} alt="logo" /></h1> */}
        <input
          type="text"
          placeholder="Rechercher un film"
          aria-autocomplete="list"
          data-listener-added_144e928a="true"
        />
        <button type="submit">
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>

      <div class="title-filter" id="title-tendances">
        <h2>Tendances</h2>
        <button class="active" id="day">
          Aujourd'hui
        </button>
        <button id="week">Cette semaine</button>
      </div>
      <div classe="Tendance">
        {!loading ? (
          <p>Chargement...</p>
        ) : (
          <main>
            {/*helloList*/}
            <Film />
          </main>
        )}
      </div>

      <div class="title-filter" id="title-category">
        <h2>Populaires</h2>
        <button class="active" id="popular">
          Populaires
        </button>
        <button id="top_rated" class="">
          Top rated
        </button>
        <button id="upcoming" class="">
          À venir
        </button>
      </div>

      <div classe="Populaire">
        {!loading ? (
          <p>Chargement...</p>
        ) : (
          <main>
            {/*helloList*/}
            <Film />
          </main>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
