import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { MovieCard } from '../components/MovieCard/MovieCard';
import styles from '../App.module.css'; // Reutilizando o grid da Home

export function Favorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  const { favoriteMovies } = context;

  return (
    <div>
      <h1>Meus Filmes Favoritos</h1>
      {favoriteMovies.length === 0 ? (
        <p>Você ainda não tem filmes favoritos.</p>
      ) : (
        <ul className={styles.moviesGrid}>
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ul>
      )}
    </div>
  );
}