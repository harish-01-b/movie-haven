import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";
import { useWatchlist } from "@/context/WatchlistContext";
import { getTrending, getTopRated, getRecentlyAdded, getRecommended } from "@/data/movies";

export default function Index() {
  const { continueWatching } = useWatchlist();

  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <div className="-mt-20 relative z-10 space-y-2">
        {continueWatching.length > 0 && <MovieRow title="Continue Watching" movies={continueWatching} />}
        <MovieRow title="Trending Now" movies={getTrending()} />
        <MovieRow title="Top Rated" movies={getTopRated()} />
        <MovieRow title="Recently Added" movies={getRecentlyAdded()} />
        <MovieRow title="Recommended for You" movies={getRecommended()} />
      </div>
    </div>
  );
}
