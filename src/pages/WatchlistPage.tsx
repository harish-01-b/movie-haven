import MovieCard from "@/components/MovieCard";
import { useWatchlist } from "@/context/WatchlistContext";

export default function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-12">
      <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-6">My Watchlist</h1>
      {watchlist.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {watchlist.map(m => <MovieCard key={m.id} movie={m} />)}
        </div>
      ) : (
        <div className="text-center mt-20">
          <p className="text-muted-foreground text-lg">Your watchlist is empty</p>
          <p className="text-muted-foreground text-sm mt-2">Browse movies and add them to your watchlist</p>
        </div>
      )}
    </div>
  );
}
