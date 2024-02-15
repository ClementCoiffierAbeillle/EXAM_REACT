import { useState, useEffect } from 'react';
import Film from '../Components/Film/Film.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Header from '../Components/Header/Header.jsx';

import "../style.css";

function App() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/")
            .then((response) => response.json())
            .then((data) => {
                setFilms(data.results);
                setLoading(true);
            })
            .catch((error) => console.error(error));
    }, []);

    const helloList = films.map((film) => {
        <Film
           data={movie.id}
    }
}