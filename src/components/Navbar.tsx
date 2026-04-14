import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, User, Menu, X } from "lucide-react";
import { categories } from "@/data/movies";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-background/80 to-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-3xl text-primary tracking-wider">STREAMIX</Link>
          <div className="hidden md:flex items-center gap-6">
            {categories.map(cat => (
              <Link key={cat} to={`/category/${cat.toLowerCase().replace(/\s/g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{cat}</Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center bg-secondary border border-border rounded-md overflow-hidden">
              <input autoFocus value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search titles, genres, cast..." className="bg-transparent text-sm px-3 py-1.5 w-48 sm:w-64 outline-none text-foreground placeholder:text-muted-foreground" />
              <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="p-1.5 text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
            </form>
          ) : (
            <button onClick={() => setSearchOpen(true)} className="text-muted-foreground hover:text-foreground transition-colors"><Search className="w-5 h-5" /></button>
          )}
          <Link to="/watchlist" className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"><Bell className="w-5 h-5" /></Link>
          <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors"><User className="w-5 h-5" /></Link>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-muted-foreground hover:text-foreground"><Menu className="w-5 h-5" /></button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-4 space-y-3">
          {categories.map(cat => (
            <Link key={cat} to={`/category/${cat.toLowerCase().replace(/\s/g, "-")}`} onClick={() => setMobileMenu(false)} className="block text-sm text-muted-foreground hover:text-foreground">{cat}</Link>
          ))}
          <Link to="/watchlist" onClick={() => setMobileMenu(false)} className="block text-sm text-muted-foreground hover:text-foreground">My Watchlist</Link>
        </div>
      )}
    </nav>
  );
}
