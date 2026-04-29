import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, TrendingUp, DollarSign, PieChart, LineChart } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import marketingImg from "@/assets/marketing-analytics.webp";

const WHATSAPP_LINK = "https://wa.me/5511969192223?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20tráfego%20pago.";

const platforms = [
  { name: "Google Ads", description: "Apareça para quem está procurando" },
  { name: "Meta Ads", description: "Facebook e Instagram com precisão" },
  { name: "LinkedIn Ads", description: "B2B e profissionais qualificados" },
  { name: "TikTok Ads", description: "Alcance novas audiências" },
];

const benefits = [
  {
    icon: Target,
    title: "Campanhas Estratégicas",
    description: "Cada campanha é planejada com foco no seu objetivo de negócio.",
  },
  {
    icon: PieChart,
    title: "Segmentação Precisa",
    description: "Alcance exatamente quem tem potencial para se tornar cliente.",
  },
  {
    icon: LineChart,
    title: "Otimização Contínua",
    description: "Testes A/B e ajustes constantes para maximizar resultados.",
  },
  {
    icon: DollarSign,
    title: "Controle de Investimento",
    description: "Transparência total sobre onde seu dinheiro está sendo investido.",
  },
];

export default function TrafegoPago() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-4 pb-12 md:py-32 overflow-x-clip">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl hidden md:block" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="min-w-0 break-words">
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BarChart3 size={14} className="md:w-4 md:h-4" />
                Tráfego Pago
              </motion.span>

              <motion.h1
                className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Tráfego pago estratégico focado em{" "}
                <span className="text-gradient">leads e vendas.</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Criamos e gerenciamos campanhas focadas em conversão, utilizando dados e 
                testes contínuos para gerar resultados consistentes e previsíveis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="cta" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com Especialista em Anúncios
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
                  src={marketingImg} 
                  alt="Marketing Analytics" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <Section className="bg-card">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plataformas que <span className="text-gradient">dominamos</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="premium-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="text-muted-foreground text-sm">{platform.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="premium-card p-8 flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                <benefit.icon size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Resultados <span className="text-gradient">mensuráveis</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Cada real investido é rastreado e otimizado. Você sabe exatamente 
              de onde vêm seus leads e quanto custa cada conversão.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Relatórios semanais detalhados",
                "Dashboard em tempo real",
                "Reuniões de alinhamento mensais",
                "Transparência total nos investimentos",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <TrendingUp size={18} className="text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="cta" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar com especialista
                <ArrowRight size={18} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "5x", label: "ROAS Médio" },
              { value: "-40%", label: "Custo por Lead" },
              { value: "+200%", label: "Aumento em Conversões" },
              { value: "100%", label: "Transparência" },
            ].map((stat, index) => (
              <div key={index} className="premium-card p-6 text-center">
                <div className="font-display text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para <span className="text-gradient">escalar suas vendas</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como gerar mais leads com tráfego pago estratégico.
            </p>
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Quero gerar mais leads pelo WhatsApp
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
