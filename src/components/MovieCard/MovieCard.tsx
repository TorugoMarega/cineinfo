import type { Movie } from '../../types/Movie';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
export function MovieCard({ id, title, poster_path, vote_average }: Movie) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <Link to={`/movie/${id}`} className={styles.movieLink}>
      <li className={styles.movieCard}>
        <img src={imageUrl} alt={title} />
        <div className={styles.movieInfo}>
          <p>{title}</p>
          <p>⭐ {vote_average.toFixed(1)}</p>
        </div>
      </li>
    </Link>
  );
}