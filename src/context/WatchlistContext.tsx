import { createContext, useContext, useState, ReactNode } from "react";
import type { Movie } from "@/data/movies";

interface WatchlistContextType {
  watchlist: Movie[];
  continueWatching: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: string) => void;
  isInWatchlist: (id: string) => boolean;
  addToContinueWatching: (movie: Movie) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [continueWatching, setContinueWatching] = useState<Movie[]>([]);

  const addToWatchlist = (movie: Movie) => setWatchlist(prev => prev.find(m => m.id === movie.id) ? prev : [...prev, movie]);
  const removeFromWatchlist = (id: string) => setWatchlist(prev => prev.filter(m => m.id !== id));
  const isInWatchlist = (id: string) => watchlist.some(m => m.id === id);
  const addToContinueWatching = (movie: Movie) => setContinueWatching(prev => {
    const filtered = prev.filter(m => m.id !== movie.id);
    return [movie, ...filtered].slice(0, 8);
  });

  return (
    <WatchlistContext.Provider value={{ watchlist, continueWatching, addToWatchlist, removeFromWatchlist, isInWatchlist, addToContinueWatching }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error("useWatchlist must be within WatchlistProvider");
  return ctx;
}
