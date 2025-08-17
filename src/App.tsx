import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { FavoritesProvider } from './context/FavoritesContext';
import { Favorites } from './pages/Favorites';
import styles from './App.module.css';

function App() {

  return (
    <FavoritesProvider>
      <div className={styles.appContainer}>
        <header className={styles.header}>
          <div className={styles.logo}><Link to="/">CineInfo</Link></div>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/favorites">Meus Favoritos</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </FavoritesProvider>
  );
}

export default App;