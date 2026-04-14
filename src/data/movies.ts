import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";
import poster7 from "@/assets/poster-7.jpg";
import poster8 from "@/assets/poster-8.jpg";
import hero1 from "@/assets/hero-banner-1.jpg";
import hero2 from "@/assets/hero-banner-2.jpg";
import hero3 from "@/assets/hero-banner-3.jpg";

export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: number;
  duration: string;
  genre: string[];
  language: string;
  country: string;
  category: string;
  ageRating: string;
  description: string;
  cast: string[];
  director: string;
}

const posters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8];
const backdrops = [hero1, hero2, hero3];

export const movies: Movie[] = [
  { id: "1", title: "Shadow Protocol", poster: poster1, backdrop: hero1, rating: 8.4, year: 2024, duration: "2h 18m", genre: ["Thriller", "Action"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Adults", description: "A covert operative must unravel a global conspiracy before time runs out. With enemies closing in from every direction, trust becomes the most dangerous weapon.", cast: ["James Mercer", "Ava Stone", "Liu Wei"], director: "Christopher Nolan" },
  { id: "2", title: "Beyond the Stars", poster: poster2, backdrop: hero1, rating: 9.1, year: 2024, duration: "2h 45m", genre: ["Sci-Fi", "Drama"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Teens", description: "An astronaut stranded on a distant planet discovers signs of an ancient civilization that could change humanity's understanding of the universe.", cast: ["Sarah Chen", "Marcus Bell", "Yuki Tanaka"], director: "Denis Villeneuve" },
  { id: "3", title: "The Hollow", poster: poster3, backdrop: hero3, rating: 7.8, year: 2023, duration: "1h 52m", genre: ["Horror", "Thriller"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Adults", description: "A family moves into an old Victorian mansion only to discover the house has a terrifying history that refuses to stay buried.", cast: ["Emma Frost", "Daniel Cruz", "Maya Patel"], director: "Jordan Peele" },
  { id: "4", title: "Eternal Tides", poster: poster4, backdrop: hero2, rating: 8.2, year: 2024, duration: "2h 05m", genre: ["Romance", "Drama"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Teens", description: "Two strangers meet during a summer in coastal Italy and embark on a love story that spans decades and continents.", cast: ["Olivia Hart", "Liam Foster", "Sofia Rossi"], director: "Greta Gerwig" },
  { id: "5", title: "Laugh Track", poster: poster5, backdrop: hero1, rating: 7.5, year: 2023, duration: "1h 48m", genre: ["Comedy"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Kids", description: "A struggling comedian accidentally goes viral and must navigate sudden fame while keeping his relationships intact.", cast: ["Kevin Park", "Zoe Adams", "Raj Sharma"], director: "Taika Waititi" },
  { id: "6", title: "Velocity", poster: poster6, backdrop: hero2, rating: 8.7, year: 2024, duration: "2h 22m", genre: ["Action", "Thriller"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Adults", description: "An ex-street racer is pulled back into the underground world when his brother's life is threatened by a ruthless crime syndicate.", cast: ["Drake Wilson", "Nina Volkov", "Chen Wei"], director: "David Leitch" },
  { id: "7", title: "Blade of Honor", poster: poster7, backdrop: hero3, rating: 9.0, year: 2024, duration: "2h 30m", genre: ["Action", "Drama"], language: "Japanese", country: "Japanese", category: "Anime", ageRating: "Teens", description: "A ronin samurai seeks redemption in feudal Japan, battling both external enemies and inner demons on a path to honor.", cast: ["Takeshi Kaneda", "Yuki Sato", "Hiro Nakamura"], director: "Makoto Shinkai" },
  { id: "8", title: "Planet Earth: Uncharted", poster: poster8, backdrop: hero3, rating: 9.3, year: 2024, duration: "6 Episodes", genre: ["Documentary"], language: "English", country: "Hollywood", category: "Documentaries", ageRating: "Kids", description: "Explore the most remote and breathtaking landscapes on Earth, from towering peaks above the clouds to the deepest ocean trenches.", cast: ["David Attenborough"], director: "Alastair Fothergill" },
  { id: "9", title: "Neon Nights", poster: poster1, backdrop: hero1, rating: 8.1, year: 2023, duration: "Season 1", genre: ["Thriller", "Drama"], language: "English", country: "Hollywood", category: "TV Shows", ageRating: "Adults", description: "A detective in a neon-lit city investigates a series of bizarre crimes that lead to a shadowy underworld.", cast: ["Alex Mercer", "Priya Desai"], director: "Sam Levinson" },
  { id: "10", title: "Code Breaker", poster: poster2, backdrop: hero2, rating: 8.5, year: 2024, duration: "Season 2", genre: ["Sci-Fi", "Thriller"], language: "English", country: "Korean", category: "Web Series", ageRating: "Teens", description: "A genius hacker uncovers a government conspiracy that threatens to reshape reality itself.", cast: ["Park Ji-hoon", "Kim Soo-yeon"], director: "Bong Joon-ho" },
  { id: "11", title: "Mumbai Nights", poster: poster6, backdrop: hero2, rating: 7.9, year: 2023, duration: "2h 15m", genre: ["Action", "Drama"], language: "Hindi", country: "Bollywood", category: "Movies", ageRating: "Adults", description: "A cop in Mumbai takes on the city's most powerful crime lord in a battle that will change both their lives forever.", cast: ["Vikram Raj", "Ananya Sharma"], director: "Rohit Shetty" },
  { id: "12", title: "Spirit Realm", poster: poster3, backdrop: hero3, rating: 8.8, year: 2024, duration: "Season 1", genre: ["Action", "Sci-Fi"], language: "Japanese", country: "Japanese", category: "Anime", ageRating: "Teens", description: "A young warrior discovers she can travel between the human world and a mystical spirit realm filled with ancient creatures.", cast: ["Sakura Yamamoto", "Kenji Ito"], director: "Hayao Miyazaki" },
  { id: "13", title: "The Last Colony", poster: poster2, backdrop: hero1, rating: 8.6, year: 2024, duration: "2h 35m", genre: ["Sci-Fi", "Action"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Teens", description: "Humanity's last settlement on Mars faces extinction as resources dwindle and a mysterious signal from deep space offers both hope and danger.", cast: ["Ryan Torres", "Elise Chang"], director: "Ridley Scott" },
  { id: "14", title: "Rhythm & Blues", poster: poster5, backdrop: hero1, rating: 7.6, year: 2023, duration: "1h 55m", genre: ["Comedy", "Drama"], language: "English", country: "Hollywood", category: "Movies", ageRating: "Teens", description: "A washed-up musician teams up with a young prodigy to create the album that could save both their careers.", cast: ["Marcus Jay", "Lily Chen"], director: "Barry Jenkins" },
  { id: "15", title: "Dark Waters", poster: poster3, backdrop: hero3, rating: 8.0, year: 2024, duration: "Season 1", genre: ["Horror", "Drama"], language: "English", country: "Hollywood", category: "TV Shows", ageRating: "Adults", description: "A coastal town's dark secrets surface when mysterious events begin occurring in the waters surrounding the harbor.", cast: ["Jessica Cole", "Tom Reed"], director: "Mike Flanagan" },
  { id: "16", title: "Chai & Chatter", poster: poster4, backdrop: hero2, rating: 7.4, year: 2024, duration: "Season 3", genre: ["Comedy", "Romance"], language: "Hindi", country: "Bollywood", category: "Web Series", ageRating: "Teens", description: "A group of friends navigate love, careers, and family expectations in modern-day Delhi.", cast: ["Aisha Khan", "Rohan Mehta"], director: "Zoya Akhtar" },
];

export const heroMovies = movies.filter(m => ["2", "6", "7"].includes(m.id));

export const categories = ["Movies", "TV Shows", "Web Series", "Anime", "Documentaries"] as const;
export const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller", "Documentary"] as const;
export const languages = ["English", "Hindi", "Japanese", "Tamil", "Korean"] as const;
export const countries = ["Hollywood", "Bollywood", "Korean", "Japanese"] as const;
export const ageRatings = ["Kids", "Teens", "Adults"] as const;

export function getMoviesByCategory(category: string) {
  return movies.filter(m => m.category === category);
}

export function getMoviesByGenre(genre: string) {
  return movies.filter(m => m.genre.includes(genre));
}

export function searchMovies(query: string) {
  const q = query.toLowerCase();
  return movies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.some(g => g.toLowerCase().includes(q)) ||
    m.cast.some(c => c.toLowerCase().includes(q)) ||
    m.director.toLowerCase().includes(q)
  );
}

export function getTrending() { return movies.filter(m => m.rating >= 8.5); }
export function getTopRated() { return [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8); }
export function getRecentlyAdded() { return movies.filter(m => m.year === 2024); }
export function getRecommended() { return movies.filter(m => m.rating >= 7.5).slice(0, 8); }
