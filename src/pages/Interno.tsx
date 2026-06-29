import { ExternalLink, Globe, Lock } from "lucide-react";

const clientPages = [
  {
    client: "Z Rocket",
    name: "Prospectador",
    description: "Ferramenta de busca de leads por localização e segmento.",
    url: "https://paginas.zrocket.com.br/zrocket-prospector.html",
  },
];

export default function Interno() {
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
        <span className="text-xs text-muted-foreground">Acesso restrito</span>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Globe size={18} className="text-primary" />
            <span className="text-sm text-primary font-medium">Páginas de Clientes</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Landing Pages
          </h1>
          <p className="text-muted-foreground mt-2">
            Todas as páginas criadas para clientes em <span className="text-foreground font-medium">paginas.zrocket.com.br</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientPages.map((page, i) => (
            <a
              key={i}
              href={page.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group premium-card p-5 flex flex-col gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{page.client}</p>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {page.name}
                  </h3>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {page.description}
              </p>
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