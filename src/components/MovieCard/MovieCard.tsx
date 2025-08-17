import { useContext } from 'react';
import type { Movie } from '../../types/Movie';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';


export function MovieCard(movie: Movie) {

  const { id, title, poster_path, vote_average } = movie;

  const context = useContext(FavoritesContext);

  //console.log('Filmes favoritos no card:', context?.favoriteMovies); 

  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }

  const { addFavorite, removeFavorite, favoriteMovies } = context;

  const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  const isFavorite = favoriteMovies.some(favMovie => favMovie.id === id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Previne a navegação ao clicar no botão
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <Link to={`/movie/${id}`} className={styles.movieLink}>
      <li className={styles.movieCard}>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} />
          <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
        <div className={styles.movieInfo}>
          <p>{title}</p>
          <p>⭐ {vote_average.toFixed(1)}</p>
        </div>
      </li>
    </Link>
  );
}