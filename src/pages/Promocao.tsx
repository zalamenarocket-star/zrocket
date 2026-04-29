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
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoZRocket from "@/assets/logo-zrocket.png";
import site1 from "@/assets/promo-site-1.jpg";
import site2 from "@/assets/promo-site-2.jpg";
import site3 from "@/assets/promo-site-3.jpg";
import site4 from "@/assets/promo-site-4.jpg";
import site5 from "@/assets/promo-site-5.jpg";
import site6 from "@/assets/promo-site-6.jpg";

const WHATSAPP_PROMO =
  "https://wa.me/5511969192223?text=" +
  encodeURIComponent("Eu quero aproveitar a promoção de Maio/2026 do Site");

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
  { icon: ShieldCheck, title: "Segurança & Estabilidade", desc: "Site institucional estável e seguro" },
];

const includes = [
  "Site completo, do zero, sob medida",
  "Até 5 páginas (plano promocional)",
  "Integração com WhatsApp",
  "Otimização básica de SEO",
  "Design profissional e responsivo",
  "Site 100% institucional sob medida",
];

const showcase = [
  { img: site1, title: "Restaurantes & Delivery", tag: "Gastronomia" },
  { img: site2, title: "Academias & Fitness", tag: "Saúde" },
  { img: site4, title: "Clínicas & Consultórios", tag: "Saúde" },
  { img: site6, title: "Beleza & Estética", tag: "Beauty" },
  { img: site3, title: "Profissionais Liberais", tag: "Serviços" },
  { img: site5, title: "Empresas & Indústrias", tag: "Corporativo" },
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

// Z Rocket brand-led palette (azul como base, com acentos vibrantes para impacto promocional)
// Brand blues: #1FA2FF (light) -> #0066FF (deep)
const BRAND_GRADIENT = "linear-gradient(135deg, #1FA2FF 0%, #0066FF 100%)";
const BRAND_GRADIENT_SOFT = "linear-gradient(135deg, #1FA2FF 0%, #0066FF 60%, #6A4BFF 100%)";
const HOT_GRADIENT = "linear-gradient(135deg, #FF3D8B 0%, #FF6A00 100%)"; // accent CTA
const TEXT_GRADIENT = "linear-gradient(90deg, #1FA2FF 0%, #0066FF 50%, #FF3D8B 100%)";
const BG_BASE = "#040b1f"; // dark navy aligned with brand

export default function Promocao() {
  const { h, m, s } = useCountdown(48);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Promoção Maio 2026 — Site Institucional Profissional | Z Rocket";

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
      "Oferta limitada: site institucional profissional por 12x R$49,90 ou R$497 no Pix. Garanta agora!",
    );
    const undoRobots = setMeta("robots", "noindex, nofollow");

    return () => {
      document.title = prevTitle;
      undoDesc();
      undoRobots();
    };
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative" style={{ background: BG_BASE }}>
      {/* Animated colorful blobs background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ background: "radial-gradient(circle, #1FA2FF 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #0066FF 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF3D8B 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative px-4 py-4 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex justify-center mb-6"
            >
              <img
                src={logoZRocket}
                alt="Z Rocket Marketing Digital"
                width={200}
                height={64}
                className="h-16 sm:h-20 w-auto"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-extrabold mb-3 md:mb-6 shadow-lg"
              style={{ background: BRAND_GRADIENT_SOFT, color: "white" }}
            >
              <Sparkles size={14} /> CONDIÇÃO ESPECIAL — MAIO 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              Site Express —{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: TEXT_GRADIENT, WebkitBackgroundClip: "text" }}
              >
                Maio 2026
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 md:mt-5 text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            >
              Tenha um site profissional e comece a gerar mais contatos pela internet.
            </motion.p>

            {/* PRICE BLOCK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative mt-5 md:mt-10 mx-auto max-w-xl rounded-3xl p-1 shadow-2xl"
              style={{
                background: BRAND_GRADIENT_SOFT,
                boxShadow: "0 0 80px -10px #1FA2FF, 0 0 120px -30px #0066FF",
              }}
            >
              <div className="rounded-[22px] p-6 sm:p-8" style={{ background: BG_BASE }}>
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 text-xs font-extrabold tracking-wider shadow-xl"
                  style={{ background: HOT_GRADIENT, color: "#1a0033" }}
                >
                  🔥 OFERTA LIMITADA
                </div>

                <p className="text-sm text-white/50 line-through">De R$ 2.900</p>
                <p
                  className="mt-2 text-xs uppercase tracking-widest font-extrabold bg-clip-text text-transparent"
                  style={{ backgroundImage: HOT_GRADIENT, WebkitBackgroundClip: "text" }}
                >
                  Por apenas
                </p>
                <p className="font-display text-4xl sm:text-6xl font-extrabold mt-1">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: TEXT_GRADIENT, WebkitBackgroundClip: "text" }}
                  >
                    12x R$ 49,90
                  </span>
                </p>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  ou <span className="font-bold text-white">R$ 497 no Pix</span>
                </p>

                <div
                  className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-extrabold shadow-lg"
                  style={{ background: HOT_GRADIENT, color: "#1a0033" }}
                >
                  <Sparkles size={14} /> Economize mais de 75%
                </div>

                {/* Countdown */}
                <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm">
                  <Clock size={14} />
                  <span>Essa condição expira em:</span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 sm:gap-3">
                  {[
                    { v: h, l: "horas" },
                    { v: m, l: "min" },
                    { v: s, l: "seg" },
                  ].map((t) => (
                    <div
                      key={t.l}
                      className="rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[68px] border"
                      style={{
                        background: "rgba(255,31,143,0.12)",
                        borderColor: "rgba(255,31,143,0.4)",
                      }}
                    >
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                        {pad(t.v)}
                      </div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60">
                        {t.l}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-white/60">⚡ Últimas vagas com esse valor</p>

                <a
                  href={WHATSAPP_PROMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 h-14 text-base sm:text-lg font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl"
                  style={{
                    background: HOT_GRADIENT,
                    boxShadow: "0 10px 40px -10px #FF6A00",
                  }}
                >
                  <MessageCircle size={22} /> Quero aproveitar a promoção
                </a>
                <p className="mt-3 text-xs text-white/60">
                  Atendimento direto pelo WhatsApp — resposta rápida
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SHOWCASE — sites chamativos */}
        <section className="px-4 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4"
                style={{ background: BRAND_GRADIENT_SOFT, color: "white" }}
              >
                Portfólio
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Sites que{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: TEXT_GRADIENT, WebkitBackgroundClip: "text" }}
                >
                  vendem todos os dias
                </span>
              </h2>
              <p className="mt-3 text-white/70 max-w-2xl mx-auto">
                Veja exemplos de sites profissionais que entregamos para nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {showcase.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden p-[2px] transition-transform hover:scale-[1.02]"
                  style={{ background: BRAND_GRADIENT_SOFT }}
                >
                  <div className="rounded-[14px] overflow-hidden" style={{ background: BG_BASE }}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={s.img}
                        alt={`Site exemplo: ${s.title}`}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-lg"
                        style={{ background: HOT_GRADIENT, color: "#1a0033" }}
                      >
                        {s.tag}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base">{s.title}</h3>
                      <p className="text-xs text-white/60 mt-1">Layout exclusivo + responsivo</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={WHATSAPP_PROMO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 h-14 text-base font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl"
                style={{ background: HOT_GRADIENT, boxShadow: "0 10px 40px -10px #FF6A00" }}
              >
                <MessageCircle size={20} /> Quero um site assim
              </a>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-4 py-14 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
              Tudo que você precisa para{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: TEXT_GRADIENT, WebkitBackgroundClip: "text" }}
              >
                vender mais online
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl p-[2px] transition-transform hover:scale-[1.03]"
                  style={{ background: BRAND_GRADIENT_SOFT }}
                >
                  <div
                    className="rounded-[14px] p-5 text-center h-full"
                    style={{ background: BG_BASE }}
                  >
                    <div
                      className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{ background: HOT_GRADIENT }}
                    >
                      <b.icon size={26} />
                    </div>
                    <h3 className="font-bold text-white">{b.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFER DETAILS */}
        <section className="px-4 py-14 md:py-20">
          <div
            className="max-w-3xl mx-auto rounded-3xl p-[2px] shadow-2xl"
            style={{ background: BRAND_GRADIENT_SOFT }}
          >
            <div className="rounded-[22px] p-6 sm:p-10" style={{ background: BG_BASE }}>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center text-white">
                O que está incluso na{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: HOT_GRADIENT, WebkitBackgroundClip: "text" }}
                >
                  promoção
                </span>
              </h2>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-white/90">
                    <span
                      className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full shrink-0"
                      style={{ background: HOT_GRADIENT }}
                    >
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <a
                  href={WHATSAPP_PROMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 h-14 text-base font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl w-full sm:w-auto"
                  style={{ background: HOT_GRADIENT, boxShadow: "0 10px 40px -10px #FF6A00" }}
                >
                  <MessageCircle size={20} /> Quero aproveitar a promoção
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-4 py-14 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
              Quem já contratou{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: TEXT_GRADIENT, WebkitBackgroundClip: "text" }}
              >
                aprovou
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl p-5 border backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(31,162,255,0.3)",
                  }}
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="#FFD200" color="#FFD200" />
                    ))}
                  </div>
                  <p className="text-sm text-white/90">"{t.text}"</p>
                  <p className="mt-3 text-sm font-bold text-white/60">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-14 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
              Tirando suas{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: HOT_GRADIENT, WebkitBackgroundClip: "text" }}
              >
                dúvidas
              </span>
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl p-5 border"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(0,102,255,0.35)",
                  }}
                >
                  <h3 className="font-bold text-white">{f.q}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-16 md:py-24">
          <div
            className="max-w-4xl mx-auto rounded-3xl p-[3px] shadow-2xl"
            style={{
              background: BRAND_GRADIENT_SOFT,
              boxShadow: "0 0 100px -20px #0066FF",
            }}
          >
            <div
              className="rounded-[22px] p-8 sm:p-12 text-center"
              style={{ background: BG_BASE }}
            >
              <p
                className="text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-clip-text text-transparent"
                style={{ backgroundImage: HOT_GRADIENT, WebkitBackgroundClip: "text" }}
              >
                🔥 Última chance
              </p>
              <h2 className="mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Volta para{" "}
                <span className="line-through text-white/40">R$ 2.900</span> após o prazo
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/80">
                Garanta agora por{" "}
                <span
                  className="font-extrabold bg-clip-text text-transparent"
                  style={{ backgroundImage: TEXT_GRADIENT, WebkitBackgroundClip: "text" }}
                >
                  12x de R$ 49,90 <span className="text-white/80">ou R$ 497 no Pix</span>
                </span>
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/70">
                <Clock size={16} /> Restam {pad(h)}:{pad(m)}:{pad(s)}
              </div>
              <div className="mt-8">
                <a
                  href={WHATSAPP_PROMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 h-14 text-base sm:text-lg font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-2xl w-full sm:w-auto"
                  style={{ background: HOT_GRADIENT, boxShadow: "0 10px 40px -10px #FF6A00" }}
                >
                  <MessageCircle size={22} /> Falar no WhatsApp agora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RULES */}
        <footer className="px-4 py-8 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center text-xs text-white/50 space-y-1">
            <p>* Oferta válida apenas para <strong>site institucional</strong> — não inclui e-commerce / loja virtual.</p>
            <p>* Sem suporte técnico após publicação.</p>
            <p>* Domínio cobrado à parte (registro anual).</p>
            <p>* Prazo de entrega inicia após envio do briefing pelo cliente.</p>
            <p>* Briefing deve ser entregue em até 30 dias corridos, sob risco de cancelamento.</p>
            <p className="pt-2">© {new Date().getFullYear()} Z Rocket Marketing Digital</p>
          </div>
        </footer>
      </div>

    </div>
  );
}