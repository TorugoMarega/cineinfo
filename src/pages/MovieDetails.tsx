import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<any>(null); // Use 'any' por enquanto
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            // Lógica de fetch similar à da Home, mas para um filme específico
            const apiKey = `api_key=${import.meta.env.VITE_API_KEY}`
            const apiUrl = import.meta.env.VITE_API_URL
            const endpoint = `/movie/`
            const apiLanguage = `language=pt-BR`
            const movieIdParam = `${movieId}`
            const url = `${apiUrl}${endpoint}${movieIdParam}?${apiKey}&${apiLanguage}`
            //const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`;

            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
            setIsLoading(false);
        };

        fetchMovieDetails();
    }, [movieId]); // O efeito depende do movieId, se ele mudar, o efeito roda de novo

    if (isLoading) {
        return <p>Carregando detalhes...</p>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Data de lançamento: {movie.release_date}</p>
            <p>Nota: {movie.vote_average.toFixed(1)}</p>
        </div>
    );
}

export default MovieDetails;