import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, Info } from "lucide-react";
import { heroMovies } from "@/data/movies";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const movie = heroMovies[current];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroMovies.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
      {heroMovies.map((m, i) => (
        <div key={m.id} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={m.backdrop} alt={m.title} className="w-full h-full object-cover" width={1920} height={1080} />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="absolute bottom-[15%] left-4 sm:left-12 max-w-xl z-10 animate-fade-in">
        <h1 className="font-display text-5xl sm:text-7xl text-foreground text-shadow-hero mb-3">{movie.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="text-primary font-semibold">{movie.rating}/10</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span className="px-2 py-0.5 border border-border rounded text-xs">{movie.ageRating}</span>
        </div>
        <p className="text-sm text-secondary-foreground/80 line-clamp-3 mb-6">{movie.description}</p>
        <div className="flex gap-3">
          <Link to={`/movie/${movie.id}`} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md font-medium text-sm transition-all hover:shadow-[var(--shadow-glow)]">
            <Play className="w-4 h-4 fill-current" /> Play
          </Link>
          <Link to={`/movie/${movie.id}`} className="flex items-center gap-2 bg-secondary hover:bg-surface-hover text-secondary-foreground px-6 py-2.5 rounded-md font-medium text-sm transition-colors">
            <Info className="w-4 h-4" /> More Info
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroMovies.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-8 h-1 rounded-full transition-all ${i === current ? "bg-primary w-12" : "bg-muted-foreground/40"}`} />
        ))}
      </div>
    </div>
  );
}
