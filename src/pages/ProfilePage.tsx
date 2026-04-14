import { User, Settings, LogOut, Film, Heart, Clock } from "lucide-react";
import { useWatchlist } from "@/context/WatchlistContext";

export default function ProfilePage() {
  const { watchlist, continueWatching } = useWatchlist();

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-4xl text-foreground">Guest User</h1>
            <p className="text-muted-foreground text-sm">guest@streamix.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Heart, label: "Watchlist", count: watchlist.length },
            { icon: Clock, label: "Continue Watching", count: continueWatching.length },
            { icon: Film, label: "Watched", count: 0 },
          ].map(({ icon: Icon, label, count }) => (
            <div key={label} className="bg-card rounded-lg p-5 border border-border">
              <Icon className="w-6 h-6 text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">{count}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {[
            { icon: Settings, label: "Account Settings" },
            { icon: LogOut, label: "Sign Out" },
          ].map(({ icon: Icon, label }) => (
            <button key={label} className="w-full flex items-center gap-3 bg-card hover:bg-surface-hover border border-border rounded-lg px-5 py-4 text-foreground text-sm transition-colors">
              <Icon className="w-5 h-5 text-muted-foreground" /> {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
