import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import type { Movie } from "@/data/movies";

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  const ref = useRef<HTMLDivElement>(null);
  if (!movies.length) return null;

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };

  return (
    <section className="mb-8 sm:mb-10">
      <h2 className="font-display text-2xl sm:text-3xl text-foreground px-4 sm:px-12 mb-3">{title}</h2>
      <div className="relative group/row">
        <button onClick={() => scroll(-1)} className="absolute left-0 top-0 bottom-8 z-10 w-10 bg-gradient-to-r from-background to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity">
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <div ref={ref} className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-12 pb-2">
          {movies.map(m => <MovieCard key={m.id} movie={m} />)}
        </div>
        <button onClick={() => scroll(1)} className="absolute right-0 top-0 bottom-8 z-10 w-10 bg-gradient-to-l from-background to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity">
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </section>
  );
}
