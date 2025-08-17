import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {

            const apiKey = `api_key=${import.meta.env.VITE_API_KEY}`
            const apiUrl = import.meta.env.VITE_API_URL
            const endpoint = `/movie/`
            const apiLanguage = `language=pt-BR`
            const movieIdParam = `${movieId}`
            const url = `${apiUrl}${endpoint}${movieIdParam}?${apiKey}&${apiLanguage}`

            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
            setIsLoading(false);
        };

        fetchMovieDetails();
    }, [movieId]);

    if (isLoading) {
        return <p>Carregando detalhes...</p>;
    }

    return (
        <div>
            <Link to="/" className={styles.backLink}>&larr; Voltar</Link>
            <div className={styles.detailsContainer}>
                <div className={styles.poster}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className={styles.info}>
                    <h1>{movie.title}</h1>
                    <p className={styles.tagline}>{movie.tagline}</p>
                    <h3>⭐ Nota</h3>
                    <p>{movie.vote_average.toFixed(1)} / 10</p>
                    <h3>Sinopse</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;