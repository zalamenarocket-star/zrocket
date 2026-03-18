import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";

const CriacaoDeSites = lazy(() => import("./pages/CriacaoDeSites"));
const Automacao = lazy(() => import("./pages/Automacao"));
const TrafegoPago = lazy(() => import("./pages/TrafegoPago"));
const Consultoria = lazy(() => import("./pages/Consultoria"));
const Contato = lazy(() => import("./pages/Contato"));
const ParceiroKommo = lazy(() => import("./pages/ParceiroKommo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/criacao-de-sites" element={<CriacaoDeSites />} />
            <Route path="/automacao" element={<Automacao />} />
            <Route path="/trafego-pago" element={<TrafegoPago />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/parceiro-kommo" element={<ParceiroKommo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
