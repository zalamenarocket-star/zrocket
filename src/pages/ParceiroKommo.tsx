import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Users, BarChart3, Zap, CheckCircle, Bot, Clock, Target, Smartphone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import kommoFunnelImg from "@/assets/kommo-funnel.webp";
import kommoInboxImg from "@/assets/kommo-inbox.webp";

const WHATSAPP_LINK = "https://wa.me/5511969192223?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20de%20CRM%20Kommo.";

const crmBenefits = [
  {
    icon: MessageSquare,
    title: "CRM Conversacional",
    description: "O primeiro CRM conversacional do mundo. Gerencie todas as conversas de WhatsApp, Instagram e Telegram em um só lugar.",
  },
  {
    icon: Target,
    title: "Funil de Vendas Visual",
    description: "Visualize todo o processo de vendas em um funil intuitivo. Acompanhe cada lead do primeiro contato ao fechamento.",
  },
  {
    icon: Bot,
    title: "Salesbot & IA",
    description: "Crie bots sem código que qualificam leads, respondem perguntas frequentes e direcionam clientes para a compra — 24/7.",
  },
  {
    icon: Zap,
    title: "Automação Rápida",
    description: "Economize tempo em tarefas repetitivas com fluxos automatizados para entrada de dados, atribuição de leads e follow-ups.",
  },
];

const features = [
  "Inbox unificado para WhatsApp, Instagram e Telegram",
  "Funil de vendas com visão panorâmica",
  "Salesbot sem código para automação",
  "Agente de IA para atendimento 24/7",
  "Campanhas de mensagens em massa",
  "Relatórios e análises em tempo real",
  "Formulários web integrados ao funil",
  "Chat em equipe e colaboração",
  "Integrações com apps populares",
  "Gestão de tarefas e lembretes",
];

const moreFeatures = [
  {
    icon: Users,
    title: "Chat em Equipe",
    description: "Fale com colegas em privado, em grupo ou diretamente em perfis de cliente.",
  },
  {
    icon: BarChart3,
    title: "Análises em Tempo Real",
    description: "Monitore performance com relatórios personalizáveis e painéis dinâmicos.",
  },
  {
    icon: Smartphone,
    title: "Apps de Chat Conectados",
    description: "Conecte múltiplos números de WhatsApp, Instagram, Facebook e Telegram.",
  },
  {
    icon: Clock,
    title: "Contexto Rápido",
    description: "Histórico completo do cliente em um único perfil: conversas, notas, tarefas e mais.",
  },
];

export default function ParceiroKommo() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-4 pb-12 md:py-32 overflow-x-clip">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl hidden md:block" />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="min-w-0 break-words">
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare size={14} className="md:w-4 md:h-4" />
                Partner Kommo
              </motion.span>

              <motion.h1
                className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Consultoria de CRM para{" "}
                <span className="text-gradient">MPMEs</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-6 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Como parceiros oficiais da Kommo, ajudamos micro, pequenas e médias empresas 
                a estruturarem seu processo comercial com o primeiro CRM conversacional do mundo. 
                Organize atendimentos, automatize vendas e escale seu negócio.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="cta" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Teste grátis por 14 dias
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com consultor
                  </a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl min-w-0"
            >
              <img 
                src={kommoFunnelImg} 
                alt="Funil de vendas Kommo CRM" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <Section className="bg-card">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Por que Kommo?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O CRM que <span className="text-gradient">vende por você</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A Kommo vem equipada com dezenas de recursos para sua equipe vender mais efetivamente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crmBenefits.map((benefit, index) => (
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

      {/* Features List */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tudo que você precisa em <span className="text-gradient">um só lugar</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Com a Kommo, sua empresa tem todas as ferramentas necessárias para gerenciar leads, 
              automatizar atendimentos e fechar mais vendas.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={kommoInboxImg} 
                alt="Inbox unificado e modelos WhatsApp Business - Kommo" 
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moreFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  className="premium-card p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-3">
                    <feat.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* WhatsApp Automation */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              WhatsApp Automático
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Automatize seu <span className="text-gradient">WhatsApp</span> de forma simples
            </h2>
            <p className="text-muted-foreground mb-6">
              Com a Kommo, você transforma o WhatsApp da sua empresa em uma máquina de vendas — 
              sem precisar de conhecimento técnico. Configure chatbots, respostas automáticas e 
              fluxos de atendimento em poucos cliques.
            </p>
            <ul className="space-y-4">
              {[
                "Respostas automáticas para perguntas frequentes",
                "Chatbot sem código que qualifica leads 24/7",
                "Envio de mensagens em massa segmentadas",
                "Templates prontos aprovados pelo WhatsApp Business",
                "Distribuição automática de leads entre vendedores",
                "Follow-up automático para leads que não responderam",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Smartphone,
                  title: "Múltiplos Números",
                  description: "Conecte vários números de WhatsApp e gerencie todos em um único painel.",
                },
                {
                  icon: Bot,
                  title: "Salesbot Sem Código",
                  description: "Crie bots arrastando e soltando blocos. Sem programação, sem complicação.",
                },
                {
                  icon: Clock,
                  title: "Atendimento 24/7",
                  description: "Seu bot responde instantaneamente a qualquer hora, mesmo fora do expediente.",
                },
                {
                  icon: Zap,
                  title: "Follow-up Automático",
                  description: "Nunca perca um lead. O sistema reengaja contatos inativos automaticamente.",
                },
              ].map((feat, index) => (
                <motion.div
                  key={index}
                  className="premium-card p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-3">
                    <feat.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-card">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-xl md:text-2xl font-display font-medium text-foreground mb-6 italic">
            "A Kommo deu um boost de 60% em todas as frentes: captar leads, manter leads, 
            responder leads e economizar tempo. É gigante."
          </blockquote>
          <p className="text-muted-foreground font-medium">Chris Donnell — Cosmichrome</p>
        </motion.div>
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
              Teste a Kommo <span className="text-gradient">grátis por 14 dias</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Ganhe acesso a todas as ferramentas e 10GB de armazenamento. Sem precisar de cartão de crédito.
            </p>
            <p className="text-muted-foreground mb-8">
              Fale com a Z Rocket e tenha suporte de um parceiro oficial para implementar o CRM ideal para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Começar teste grátis
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar consultoria
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
