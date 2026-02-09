import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Bot, Users, Clock, Zap, CheckCircle, Instagram } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import automationImg from "@/assets/automation-chat.jpg";
import customerServiceImg from "@/assets/customer-service.jpg";

const WHATSAPP_LINK = "https://wa.me/5511969192223?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20automação.";

const benefits = [
  {
    icon: Bot,
    title: "Atendimento 24/7",
    description: "Responda seus clientes automaticamente, mesmo fora do horário comercial.",
  },
  {
    icon: Users,
    title: "Qualificação de Leads",
    description: "Identifique os leads mais quentes antes mesmo do contato humano.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatize tarefas repetitivas e foque no que realmente importa.",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Reduza o tempo de resposta e aumente a satisfação dos clientes.",
  },
];

const features = [
  "Chatbots inteligentes personalizados",
  "Fluxos de atendimento automatizados",
  "Integração com CRM",
  "Disparo de mensagens em massa",
  "Relatórios e métricas",
  "Suporte e treinamento inclusos",
];

export default function Automacao() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-4 pb-12 md:py-32 overflow-x-clip">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="min-w-0 break-words">
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare size={14} className="md:w-4 md:h-4" />
                Automação
              </motion.span>

              <motion.h1
                className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Automação para{" "}
                <span className="text-gradient">vender mais e atender melhor.</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Estruturamos automações inteligentes para WhatsApp e Instagram, 
                organizando atendimentos, qualificando leads e acelerando o processo 
                de vendas — sem perder o contato humano quando necessário.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium">
                  <MessageSquare size={14} />
                  WhatsApp
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E4405F]/10 border border-[#E4405F]/20 text-[#E4405F] text-sm font-medium">
                  <Instagram size={14} />
                  Instagram
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="cta" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero automatizar meu atendimento
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
                  src={customerServiceImg} 
                  alt="Atendimento automatizado" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="premium-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                <benefit.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
              O que você <span className="text-gradient">recebe</span>
            </h2>
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
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={automationImg} 
                alt="Automação de Mensagens" 
                className="w-full h-auto"
              />
            </div>
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
              Pronto para <span className="text-gradient">automatizar</span> seu atendimento?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como podemos transformar seu atendimento no WhatsApp e Instagram.
            </p>
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Quero automatizar meu atendimento
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
