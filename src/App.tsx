import { MovieCard } from './components/MovieCard/MovieCard';
import type { Movie } from './types/Movie';
import styles from './App.module.css'; // Vamos criar este arquivo
import { useEffect, useState } from 'react';



function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const fetchMovies = async () => {
    try{
      const apiKey = `api_key=${import.meta.env.VITE_API_KEY}`
      const apiUrl = import.meta.env.VITE_API_URL
      const endpont = `/movie/popular`
      const apiLanguage = `language=pt-BR`
      const url = `${apiUrl}${endpont}?${apiKey}&${apiLanguage}` 

      console.log("Chamando API de filmes na URL: ", url)

      const response = await fetch(url);
      if(!response.ok){
        throw new Error('Falha ao buscar os filmes. ');
      }
      const data = await response.json();
      setMovies(data.results);
    }catch(err: any){
      setError(err.message); // Em caso de erro, atualiza o estado de erro
    }
    finally {
        setIsLoading(false); // Termina o carregamento, com sucesso ou erro
      }
  };

  fetchMovies();
  }, []) // O array vazio [] garante que este efeito rode apenas uma vez

  if (isLoading) {
    return <div className={styles.loadingState}>Carregando filmes...</div>;
  }

  if (error) {
    return <div className={styles.errorState}>Erro: {error}</div>;
  }

  return (
    
    <div>
      <h1 className={styles.title}>CineInfo</h1>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id} // A prop 'key' é essencial para o React!
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;