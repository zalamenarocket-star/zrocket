import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Search, Map, Target, CheckCircle, Calendar } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

const WHATSAPP_LINK = "https://wa.me/5511969192223?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20de%20consultoria.";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Analisamos sua situação atual, identificando pontos fortes e oportunidades de melhoria.",
  },
  {
    icon: Map,
    title: "Planejamento",
    description: "Criamos um plano estratégico personalizado com metas claras e prazos definidos.",
  },
  {
    icon: Target,
    title: "Execução",
    description: "Implementamos as ações definidas com acompanhamento próximo e ajustes constantes.",
  },
];

const benefits = [
  "Visão clara do cenário atual do marketing",
  "Plano de ação estruturado e priorizado",
  "Definição de KPIs e métricas de sucesso",
  "Identificação de quick wins",
  "Roadmap de médio e longo prazo",
  "Acompanhamento mensal de resultados",
];

export default function Consultoria() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Lightbulb size={16} />
              Consultoria de Marketing
            </motion.span>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Consultoria de marketing para{" "}
              <span className="text-gradient">crescimento estruturado.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Analisamos seu negócio, identificamos oportunidades e estruturamos um plano 
              de marketing claro, focado em crescimento, organização e escala.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild variant="cta" size="xl">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Solicitar diagnóstico no WhatsApp
                  <ArrowRight size={20} />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nosso <span className="text-gradient">processo</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="premium-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                  <step.icon size={28} className="text-primary-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que você <span className="text-gradient">recebe</span>
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="premium-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center">
                <Calendar size={32} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Agende seu diagnóstico
                </h3>
                <p className="text-muted-foreground text-sm">Gratuito e sem compromisso</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Em uma conversa de 30 minutos, vamos entender seu negócio e mostrar 
              como podemos ajudar sua empresa a crescer de forma estruturada.
            </p>
            <Button asChild variant="cta" size="lg" className="w-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Agendar diagnóstico gratuito
                <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>
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
              Pronto para <span className="text-gradient">estruturar seu marketing</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Agende um diagnóstico gratuito e descubra as oportunidades de crescimento do seu negócio.
            </p>
            <Button asChild variant="cta" size="xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Solicitar diagnóstico no WhatsApp
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
