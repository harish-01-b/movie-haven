import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { movies, searchMovies, genres, languages, countries } from "@/data/movies";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const [localQuery, setLocalQuery] = useState(query);
  const [genreFilter, setGenreFilter] = useState("");
  const [langFilter, setLangFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let list = query ? searchMovies(query) : movies;
    if (genreFilter) list = list.filter(m => m.genre.includes(genreFilter));
    if (langFilter) list = list.filter(m => m.language === langFilter);
    if (yearFilter) list = list.filter(m => m.year === Number(yearFilter));
    return list;
  }, [query, genreFilter, langFilter, yearFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setParams({ q: localQuery });
  };

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-12">
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center bg-secondary border border-border rounded-lg overflow-hidden">
          <Search className="w-5 h-5 text-muted-foreground ml-4" />
          <input value={localQuery} onChange={e => setLocalQuery(e.target.value)} placeholder="Search movies, shows, cast, genres..." className="flex-1 bg-transparent text-foreground px-3 py-3 outline-none placeholder:text-muted-foreground" />
          <button type="button" onClick={() => setShowFilters(!showFilters)} className="p-3 text-muted-foreground hover:text-foreground"><Filter className="w-5 h-5" /></button>
        </div>
      </form>

      {showFilters && (
        <div className="max-w-2xl mx-auto mb-8 flex flex-wrap gap-3 animate-fade-in">
          <select value={genreFilter} onChange={e => setGenreFilter(e.target.value)} className="bg-secondary text-secondary-foreground text-sm px-3 py-2 rounded-md border border-border outline-none">
            <option value="">All Genres</option>
            {genres.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select value={langFilter} onChange={e => setLangFilter(e.target.value)} className="bg-secondary text-secondary-foreground text-sm px-3 py-2 rounded-md border border-border outline-none">
            <option value="">All Languages</option>
            {languages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)} className="bg-secondary text-secondary-foreground text-sm px-3 py-2 rounded-md border border-border outline-none">
            <option value="">All Years</option>
            {[2024, 2023, 2022, 2021, 2020].map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <button onClick={() => { setGenreFilter(""); setLangFilter(""); setYearFilter(""); }} className="text-sm text-primary hover:underline">Clear</button>
        </div>
      )}

      <h2 className="font-display text-2xl text-foreground mb-6">{query ? `Results for "${query}"` : "Browse All"} <span className="text-muted-foreground text-lg">({results.length})</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {results.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
      {results.length === 0 && <p className="text-center text-muted-foreground mt-12">No results found. Try a different search.</p>}
    </div>
  );
}
