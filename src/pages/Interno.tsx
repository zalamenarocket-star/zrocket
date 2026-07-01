import { useState } from "react";
import { ExternalLink, Globe, Lock, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

const clients = [
  {
    id: "zrocket",
    label: "Z Rocket",
    pages: [
      {
        name: "Prospectador",
        description: "Ferramenta de busca de leads por localização e segmento.",
        url: "https://paginas.zrocket.com.br/zrocket-prospector.html",
      },
      {
        name: "Ações",
        description: "Painel de ações e campanhas ativas.",
        url: "https://paginas.zrocket.com.br/zrocket-acoes.html",
      },
      {
        name: "Inspeções",
        description: "Relatório de inspeções e acompanhamento.",
        url: "https://paginas.zrocket.com.br/zrocket-inspecoes.html",
      },
    ],
  },
  {
    id: "std",
    label: "STD Engenharia",
    pages: [
      {
        name: "Google Ads",
        description: "Painel de campanhas Google Ads.",
        url: "https://paginas.zrocket.com.br/std-google-ads.html",
      },
    ],
  },
  {
    id: "calfen",
    label: "Calfen Industrial",
    pages: [
      {
        name: "Relatório/Contrato Jul 2026",
        description: "Relatório e contrato referente a julho de 2026.",
        url: "https://paginas.zrocket.com.br/calfen-relatorio-contrato-jul2026.html",
      },
    ],
  },
  {
    id: "outros",
    label: "Outros",
    pages: [
      {
        name: "Demo Relatório",
        description: "Página de demonstração de relatório.",
        url: "https://paginas.zrocket.com.br/demo-relatorio.html",
      },
    ],
  },
];

export default function Interno() {
  const [activeTab, setActiveTab] = useState("zrocket");
  const navigate = useNavigate();

  const activeClient = clients.find((c) => c.id === activeTab)!;

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/interno-login");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <Lock size={16} className="text-white" />
          </div>
          <span className="font-display font-semibold text-foreground">Z Rocket — Interno</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">Acesso restrito</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut size={14} />
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={18} className="text-primary" />
            <span className="text-sm text-primary font-medium">Páginas de Clientes</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">Landing Pages</h1>
          <p className="text-muted-foreground mt-2">
            Todas as páginas em{" "}
            <span className="text-foreground font-medium">paginas.zrocket.com.br</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-border/40 mb-8 overflow-x-auto">
          {clients.map((client) => (
            <button
              key={client.id}
              onClick={() => setActiveTab(client.id)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === client.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {client.label}
              <span className="ml-2 text-xs opacity-60">({client.pages.length})</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeClient.pages.map((page, i) => (
            <a
              key={i}
              href={page.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group premium-card p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{activeClient.label}</p>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {page.name}
                  </h3>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{page.description}</p>
              <span className="text-xs text-muted-foreground/60 truncate mt-auto">
                {page.url.replace("https://", "")}
              </span>
            </a>
          ))}
        </div>
      </main>

      <footer className="text-center text-xs text-muted-foreground/50 py-8">
        Z Rocket © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
