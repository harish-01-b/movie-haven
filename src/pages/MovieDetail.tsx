import { useParams, Link } from "react-router-dom";
import { Play, Plus, Check, Star, Clock, Calendar, Globe } from "lucide-react";
import { movies } from "@/data/movies";
import { useWatchlist } from "@/context/WatchlistContext";
import MovieRow from "@/components/MovieRow";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === id);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist, addToContinueWatching } = useWatchlist();

  if (!movie) return <div className="min-h-screen flex items-center justify-center text-foreground pt-16">Movie not found</div>;

  const inList = isInWatchlist(movie.id);
  const similar = movies.filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g))).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] sm:h-[65vh]">
        <img src={movie.backdrop} alt={movie.title} className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 -mt-48 relative z-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex-shrink-0 w-48 sm:w-64 mx-auto sm:mx-0">
            <img src={movie.poster} alt={movie.title} className="w-full rounded-lg shadow-2xl" loading="lazy" width={256} height={384} />
          </div>

          <div className="flex-1">
            <h1 className="font-display text-4xl sm:text-6xl text-foreground mb-3">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1 text-primary font-semibold"><Star className="w-4 h-4 fill-primary" />{movie.rating}/10</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{movie.year}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{movie.duration}</span>
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5" />{movie.language}</span>
              <span className="px-2 py-0.5 border border-border rounded text-xs">{movie.ageRating}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genre.map(g => <span key={g} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">{g}</span>)}
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6 max-w-2xl">{movie.description}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button onClick={() => addToContinueWatching(movie)} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-all hover:shadow-[var(--shadow-glow)]">
                <Play className="w-5 h-5 fill-current" /> Play Now
              </button>
              <button onClick={() => inList ? removeFromWatchlist(movie.id) : addToWatchlist(movie)} className="flex items-center gap-2 bg-secondary hover:bg-surface-hover text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors">
                {inList ? <><Check className="w-5 h-5" /> In Watchlist</> : <><Plus className="w-5 h-5" /> Add to Watchlist</>}
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="text-muted-foreground">Director:</span> <span className="text-foreground">{movie.director}</span></p>
              <p><span className="text-muted-foreground">Cast:</span> <span className="text-foreground">{movie.cast.join(", ")}</span></p>
              <p><span className="text-muted-foreground">Country:</span> <span className="text-foreground">{movie.country}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <MovieRow title="You May Also Like" movies={similar} />
      </div>
    </div>
  );
}
