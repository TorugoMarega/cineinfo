import { createContext, useState, type ReactNode } from "react";
import type { Movie } from "../types/Movie";

type FavoritesContextType = {
    favoriteMovies: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movieId: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addFavorite = (movie: Movie) => {
        if (!favorites.some(fav => fav.id === movie.id)) {
            setFavorites(prevFavorites => [...prevFavorites, movie]);
        }
    };

    const removeFavorite = (movieId: number) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
    };

  return (
    <FavoritesContext.Provider value={{ favoriteMovies: favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}