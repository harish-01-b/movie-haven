import { useParams } from "react-router-dom";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { movies, genres } from "@/data/movies";

const categoryMap: Record<string, string> = {
  movies: "Movies",
  "tv-shows": "TV Shows",
  "web-series": "Web Series",
  anime: "Anime",
  documentaries: "Documentaries",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categoryMap[slug || ""] || "Movies";
  const [genreFilter, setGenreFilter] = useState("");

  let list = movies.filter(m => m.category === category);
  if (genreFilter) list = list.filter(m => m.genre.includes(genreFilter));

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-12">
      <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-6">{category}</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => setGenreFilter("")} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${!genreFilter ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-surface-hover"}`}>All</button>
        {genres.map(g => (
          <button key={g} onClick={() => setGenreFilter(g)} className={`px-4 py-1.5 rounded-full text-sm transition-colors ${genreFilter === g ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-surface-hover"}`}>{g}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {list.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
      {!list.length && <p className="text-center text-muted-foreground mt-12">No content in this category yet.</p>}
    </div>
  );
}
