import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import CriacaoDeSites from "./pages/CriacaoDeSites";
import Automacao from "./pages/Automacao";
import TrafegoPago from "./pages/TrafegoPago";
import Consultoria from "./pages/Consultoria";
import Contato from "./pages/Contato";
import ParceiroKommo from "./pages/ParceiroKommo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
