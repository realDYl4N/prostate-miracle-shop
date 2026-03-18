import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// @ts-ignore - QueryClient exists in react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import ProstateMiraclePage from "./pages/ProstateMiraclePage";
import TrackOrderPage from "./pages/TrackOrderPage";
import TheSciencePage from "./pages/TheSciencePage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/prostate-miracle" element={<ProstateMiraclePage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/the-science" element={<TheSciencePage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/product/:handle" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
