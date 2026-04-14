import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WatchlistProvider } from "@/context/WatchlistContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import WatchlistPage from "./pages/WatchlistPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WatchlistProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WatchlistProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
