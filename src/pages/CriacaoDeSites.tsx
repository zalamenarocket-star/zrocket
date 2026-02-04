import { motion } from "framer-motion";
import { ArrowRight, Globe, Check, Zap, Search, Shield, Smartphone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import webDesignImg from "@/assets/web-design-mockup.jpg";
import stdEngenhariaImg from "@/assets/projects/stdengenharia.png";
import mohamedHassanImg from "@/assets/projects/mohamedhassan.png";
import griloPneusImg from "@/assets/projects/grilopneus.png";

const WHATSAPP_LINK = "https://wa.me/5511969192223?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20criação%20de%20site.";

// Configure seus projetos aqui - adicione imagem e link para cada projeto
const projects = [
  { id: 1, title: "STD Engenharia", description: "Site institucional para empresa de engenharia e inspeções técnicas", image: stdEngenhariaImg, link: "https://stdengenharia.com.br/" },
  { id: 2, title: "Mohamed Hassan Advocacia", description: "Site institucional para escritório de advocacia", image: mohamedHassanImg, link: "https://mohamedhassan.com.br/" },
  { id: 3, title: "Grilo Pneus", description: "Site para loja de rodas e pneus multimarcas", image: griloPneusImg, link: "https://grilopneus.com.br/" },
];

const benefits = [
  { icon: Zap, text: "Sites rápidos e otimizados" },
  { icon: Search, text: "SEO integrado para rankear no Google" },
  { icon: Smartphone, text: "100% responsivo em todos os dispositivos" },
  { icon: Shield, text: "Segurança e certificado SSL" },
];

const features = [
  "Design moderno e exclusivo",
  "Otimizado para conversão",
  "Integração com WhatsApp",
  "Painel de administração",
  "Hospedagem incluída",
  "Suporte técnico contínuo",
];

export default function CriacaoDeSites() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Globe size={16} />
                Criação de Sites
              </motion.span>

              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Sites profissionais focados em{" "}
                <span className="text-gradient">conversão e resultados.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Criamos sites modernos, rápidos e estratégicos, pensados para transformar 
                visitantes em contatos e vendas. Cada projeto é desenvolvido com foco em 
                performance, SEO, experiência do usuário e credibilidade da marca.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="cta" size="xl">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Solicitar orçamento pelo WhatsApp
                    <ArrowRight size={20} />
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={webDesignImg} 
                  alt="Web Design Mockup" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="premium-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={28} className="text-primary-foreground" />
              </div>
              <p className="font-medium text-foreground">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que está <span className="text-gradient">incluso</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Cada site é desenvolvido com as melhores práticas do mercado, 
              garantindo qualidade, performance e resultados.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <ProjectsCarousel projects={projects} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para ter um site que <span className="text-gradient">converte</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e receba um orçamento personalizado para o seu projeto.
            </p>
            <Button asChild variant="cta" size="xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento pelo WhatsApp
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
