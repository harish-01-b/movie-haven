import { Link } from "react-router-dom";
import { Play, Plus, Check, Star } from "lucide-react";
import { useWatchlist } from "@/context/WatchlistContext";
import type { Movie } from "@/data/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inList = isInWatchlist(movie.id);

  return (
    <div className="group relative flex-shrink-0 w-[140px] sm:w-[180px] md:w-[200px]">
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="relative rounded-md overflow-hidden aspect-[2/3] bg-secondary">
          <img src={movie.poster} alt={movie.title} loading="lazy" width={200} height={300} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
            </div>
          </div>
          <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/70 backdrop-blur-sm rounded px-1.5 py-0.5 text-xs">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="text-foreground font-medium">{movie.rating}</span>
          </div>
        </div>
      </Link>
      <div className="mt-2 flex items-start justify-between gap-1">
        <div className="min-w-0">
          <h3 className="text-xs sm:text-sm font-medium text-foreground truncate">{movie.title}</h3>
          <p className="text-xs text-muted-foreground">{movie.year} · {movie.genre[0]}</p>
        </div>
        <button onClick={() => inList ? removeFromWatchlist(movie.id) : addToWatchlist(movie)} className={`flex-shrink-0 p-1 rounded-full transition-colors ${inList ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
          {inList ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
