import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Palette,
  Zap,
  ShieldCheck,
  Check,
  Clock,
  MessageCircle,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const WHATSAPP_PROMO =
  "https://wa.me/5511969192223?text=" +
  encodeURIComponent("Quero contratar o site na promoção de R$49,00");

function useCountdown(hours: number) {
  const [target] = useState(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("promo-deadline") : null;
    if (stored) {
      const t = parseInt(stored, 10);
      if (!isNaN(t) && t > Date.now()) return t;
    }
    const t = Date.now() + hours * 60 * 60 * 1000;
    if (typeof window !== "undefined") localStorage.setItem("promo-deadline", String(t));
    return t;
  });

  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

const benefits = [
  { icon: Smartphone, title: "100% Responsivo", desc: "Perfeito em celulares, tablets e desktops" },
  { icon: Palette, title: "Design Profissional", desc: "Visual moderno alinhado à sua marca" },
  { icon: Zap, title: "Alta Velocidade", desc: "Carregamento otimizado para conversão" },
  { icon: ShieldCheck, title: "Segurança & Estabilidade", desc: "SSL e hospedagem confiável inclusos" },
];

const includes = [
  "Site completo, do zero, sob medida",
  "1 ano de hospedagem incluso",
  "Até 5 páginas (plano promocional)",
  "Certificado SSL + domínio configurado",
  "Integração com WhatsApp e formulário",
  "Otimização básica de SEO",
];

const testimonials = [
  { name: "Ricardo M.", text: "Depois do site, comecei a receber muito mais contatos pelo WhatsApp." },
  { name: "Juliana A.", text: "Entrega rápida, profissional e o atendimento foi impecável." },
  { name: "Eduardo S.", text: "O site ficou muito acima do que eu esperava pelo valor pago." },
  { name: "Patrícia L.", text: "Em poucos dias meu negócio ganhou credibilidade na internet." },
  { name: "Marcos T.", text: "Equipe atenciosa e resultado de altíssima qualidade." },
  { name: "Fernanda R.", text: "Recomendo demais, valeu cada centavo do investimento." },
];

const faqs = [
  { q: "Preciso ter o conteúdo pronto?", a: "Não! Ajudamos você no processo com um briefing guiado." },
  { q: "Funciona bem no celular?", a: "Sim, totalmente responsivo e otimizado para mobile." },
  { q: "Qual o prazo de entrega?", a: "Iniciamos imediatamente após o envio do briefing pelo cliente." },
  { q: "Posso pagar parcelado?", a: "Sim, em até 12x no cartão ou à vista com desconto." },
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Promocao() {
  const { h, m, s } = useCountdown(48);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Promoção Maio 2026 — Site + 1 Ano de Hospedagem | Z Rocket";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const undoDesc = setMeta(
      "description",
      "Oferta limitada: site profissional completo + 1 ano de hospedagem por 12x R$49. Economize mais de 75%. Garanta agora!",
    );
    const undoRobots = setMeta("robots", "noindex, nofollow");

    return () => {
      document.title = prevTitle;
      undoDesc();
      undoRobots();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky urgency bar */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 text-center text-xs sm:text-sm font-semibold shadow-lg">
        <span className="inline-flex items-center gap-2 px-4">
          <Sparkles size={14} />
          OFERTA EXPIRA EM {pad(h)}:{pad(m)}:{pad(s)}
        </span>
      </div>

      {/* HERO */}
      <section className="relative px-4 py-12 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.4), transparent 60%)" }}
        />
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-primary mb-6"
          >
            <Sparkles size={14} /> CONDIÇÃO ESPECIAL — MAIO 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Promoção de Maio 2026 —{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Site Completo + 1 Ano de Hospedagem
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Tenha um site profissional e comece a gerar mais contatos pela internet.
          </motion.p>

          {/* PRICE BLOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative mt-10 mx-auto max-w-xl rounded-2xl border-2 border-primary/40 bg-card p-6 sm:p-8 shadow-2xl"
            style={{ boxShadow: "0 0 80px -20px hsl(var(--primary) / 0.5)" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-extrabold text-primary-foreground tracking-wider shadow-lg">
              OFERTA LIMITADA
            </div>

            <p className="text-sm text-muted-foreground line-through">De R$ 2.900</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-primary font-bold">Por apenas</p>
            <p className="font-display text-4xl sm:text-6xl font-extrabold mt-1">
              <span className="bg-gradient-brand bg-clip-text text-transparent">12x R$ 49,00</span>
            </p>
            <p className="mt-2 text-sm sm:text-base text-foreground/80">
              ou <span className="font-bold text-foreground">R$ 597 à vista</span>
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-4 py-1.5 text-sm font-bold text-primary">
              <Sparkles size={14} /> Economize mais de 75%
            </div>

            {/* Countdown */}
            <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-xs sm:text-sm">
              <Clock size={14} />
              <span>Essa condição expira em:</span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 sm:gap-3">
              {[
                { v: h, l: "horas" },
                { v: m, l: "min" },
                { v: s, l: "seg" },
              ].map((t) => (
                <div key={t.l} className="rounded-lg bg-muted px-3 py-2 sm:px-4 sm:py-3 min-w-[64px]">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                    {pad(t.v)}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Últimas vagas com esse valor</p>

            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="mt-6 w-full"
            >
              <a href={WHATSAPP_PROMO} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Quero aproveitar a promoção
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Atendimento direto pelo WhatsApp — resposta rápida
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-14 md:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Tudo que você precisa para vender mais online
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 transition-colors"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <b.icon size={24} />
                </div>
                <h3 className="font-bold text-foreground">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER DETAILS */}
      <section className="px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center">
            O que está incluso na promoção
          </h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-foreground/90">
                <Check className="mt-0.5 text-primary shrink-0" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_PROMO} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Quero aproveitar a promoção
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-14 md:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Quem já contratou aprovou
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-card p-5">
                <div className="flex gap-1 text-primary mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90">"{t.text}"</p>
                <p className="mt-3 text-sm font-bold text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            Tirando suas dúvidas
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-bold text-foreground">{f.q}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16 md:py-24">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 text-center border-2 border-primary/40"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.1))",
            boxShadow: "0 0 100px -20px hsl(var(--primary) / 0.4)",
          }}
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
            Última chance
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold">
            Volta para R$ 2.900 após o prazo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Garanta agora por <span className="font-bold text-foreground">12x de R$ 49,00</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} /> Restam {pad(h)}:{pad(m)}:{pad(s)}
          </div>
          <div className="mt-8">
            <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_PROMO} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Falar no WhatsApp agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* RULES */}
      <footer className="px-4 py-8 border-t border-border">
        <div className="max-w-3xl mx-auto text-center text-xs text-muted-foreground space-y-1">
          <p>* Domínio cobrado à parte (registro anual).</p>
          <p>* Prazo de entrega inicia após envio do briefing pelo cliente.</p>
          <p>* Briefing deve ser entregue em até 30 dias corridos, sob risco de cancelamento.</p>
          <p className="pt-2">© {new Date().getFullYear()} Z Rocket Marketing Digital</p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
