import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  Users,
  Cog,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  Headphones,
  DollarSign,
  ShoppingCart,
  HeartPulse,
  Scale,
  Home,
  GraduationCap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import heroImg from "@/assets/ai-agents-hero.webp";
import teamImg from "@/assets/ai-team.webp";
import workflowImg from "@/assets/ai-workflow.webp";
import corporateImg from "@/assets/ai-corporate.webp";

const WHATSAPP_LINK =
  "https://wa.me/5511969192223?text=Olá!%20Quero%20conhecer%20os%20Agentes%20de%20IA%20da%20Z%20Rocket.";

const corporateAgents = [
  {
    icon: MessageSquare,
    title: "Agente de Atendimento",
    description:
      "Responde clientes 24/7 no WhatsApp, Instagram, site e e-mail com tom de voz da sua marca, contexto completo e capacidade de resolver demandas sem intervenção humana.",
  },
  {
    icon: TrendingUp,
    title: "Agente Comercial / SDR",
    description:
      "Qualifica leads, faz follow-up, agenda reuniões e nutre oportunidades automaticamente. Aumenta a conversão sem aumentar o time de vendas.",
  },
  {
    icon: Headphones,
    title: "Agente de Suporte",
    description:
      "Resolve dúvidas técnicas, abre e acompanha tickets, consulta documentação interna e escala para humanos somente quando necessário.",
  },
  {
    icon: DollarSign,
    title: "Agente Financeiro",
    description:
      "Emite boletos, envia lembretes de cobrança, concilia pagamentos e responde dúvidas financeiras com integração ao seu ERP.",
  },
  {
    icon: Users,
    title: "Agente de RH",
    description:
      "Triagem de currículos, agendamento de entrevistas, onboarding de novos colaboradores e respostas a dúvidas internas em segundos.",
  },
  {
    icon: Cog,
    title: "Agente de Back-office",
    description:
      "Processa documentos, preenche planilhas, atualiza CRMs, gera relatórios e executa fluxos repetitivos com precisão e auditoria completa.",
  },
];

const sectorAgents = [
  {
    icon: HeartPulse,
    sector: "Saúde",
    description:
      "Agendamento, confirmação de consultas, triagem clínica inicial e pós-atendimento automatizado.",
  },
  {
    icon: Scale,
    sector: "Jurídico",
    description:
      "Triagem de casos, geração de petições, acompanhamento processual e atendimento ao cliente.",
  },
  {
    icon: Home,
    sector: "Imobiliário",
    description:
      "Qualificação de leads, agendamento de visitas, follow-up de propostas e atendimento de locatários.",
  },
  {
    icon: ShoppingCart,
    sector: "E-commerce",
    description:
      "Recuperação de carrinho, status de pedido, atendimento pós-venda e recomendação personalizada.",
  },
  {
    icon: Building2,
    sector: "Indústria",
    description:
      "Atendimento B2B, cotações, suporte técnico, logística e gestão de pedidos automatizada.",
  },
  {
    icon: GraduationCap,
    sector: "Educação",
    description:
      "Captação de alunos, matrículas, tira-dúvidas pedagógico e suporte administrativo 24/7.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Operação 24/7",
    description: "Sua empresa nunca para. Atendimento, vendas e processos rodando todos os dias, sem pausa.",
  },
  {
    icon: TrendingUp,
    title: "Escala sem contratar",
    description: "Atenda 10x mais clientes com a mesma estrutura. Crescimento sem multiplicar a folha.",
  },
  {
    icon: ShieldCheck,
    title: "Padronização total",
    description: "Cada interação segue o seu padrão de qualidade, com tom de voz e regras de negócio definidas.",
  },
  {
    icon: Zap,
    title: "Resposta instantânea",
    description: "Zero tempo de espera. Leads quentes atendidos no segundo certo, aumentando conversão.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico e mapeamento",
    description:
      "Mapeamos seus processos, gargalos e oportunidades para identificar onde os agentes geram maior impacto.",
  },
  {
    number: "02",
    title: "Desenho dos agentes",
    description:
      "Definimos personas, fluxos, integrações, base de conhecimento e regras de negócio de cada agente.",
  },
  {
    number: "03",
    title: "Integração e treinamento",
    description:
      "Conectamos com CRM, ERP, WhatsApp, e-mail e demais sistemas. Treinamos os agentes com seus dados.",
  },
  {
    number: "04",
    title: "Operação e evolução contínua",
    description:
      "Monitoramos desempenho, otimizamos respostas e expandimos as capacidades conforme sua empresa cresce.",
  },
];

export default function AgentesDeIA() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-4 pb-12 md:py-32 overflow-x-clip">
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
                <Sparkles size={14} />
                Agentes de IA
              </motion.span>

              <motion.h1
                className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Times de <span className="text-gradient">Agentes de IA</span> que resolvem 100% do fluxo da sua empresa.
              </motion.h1>

              <motion.p
                className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Estruturamos agentes corporativos, agentes por setor e times completos
                de IA que executam vendas, atendimento, suporte, financeiro, RH e
                back-office — integrados aos seus sistemas e operando 24 horas por dia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero meu time de IA
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/contato">Falar com especialista</Link>
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
                  src={heroImg}
                  alt="Agentes de IA corporativos operando dashboards"
                  className="w-full h-auto"
                  width={1280}
                  height={832}
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What are AI Agents */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain size={16} />O que são Agentes de IA
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mais do que chatbots. <span className="text-gradient">Colaboradores digitais</span> que executam tarefas reais.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Agentes de IA são profissionais digitais autônomos. Eles raciocinam,
              tomam decisões, consultam sistemas, executam ações e aprendem com o
              contexto da sua empresa — substituindo processos manuais por
              operações inteligentes e auditáveis.
            </p>
            <p className="text-lg text-muted-foreground">
              Diferente de um chatbot que apenas responde, um agente realiza:
              consulta seu CRM, agenda uma reunião, atualiza um pedido,
              envia uma cobrança, faz uma triagem clínica ou conclui uma venda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={corporateImg}
                alt="Equipe corporativa usando IA"
                className="w-full h-auto"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Corporate Agents */}
      <Section>
        <SectionHeader
          badge="Agentes Corporativos"
          title={
            <>
              Um agente para cada <span className="text-gradient">área da empresa</span>
            </>
          }
          description="Implantamos agentes especializados que cobrem os principais setores corporativos, conversando entre si e com seus sistemas."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateAgents.map((agent, index) => (
            <motion.div
              key={agent.title}
              className="premium-card p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                <agent.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {agent.title}
              </h3>
              <p className="text-muted-foreground">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sector Agents */}
      <Section className="bg-card">
        <SectionHeader
          badge="Agentes por Setor"
          title={
            <>
              Soluções verticais para <span className="text-gradient">cada mercado</span>
            </>
          }
          description="Agentes treinados com a linguagem, fluxos e particularidades de cada setor."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sectorAgents.map((agent, index) => (
            <motion.div
              key={agent.sector}
              className="premium-card p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <agent.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {agent.sector}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team of agents */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamImg}
                alt="Time de agentes de IA conectados"
                className="w-full h-auto"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Users size={16} />
              Time de Agentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Um time inteiro de IA cobrindo <span className="text-gradient">100% do fluxo</span> da empresa.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Não entregamos um agente isolado. Montamos um time orquestrado de
              agentes que conversam entre si, passam contexto, escalam tarefas
              e resolvem ponta a ponta cada fluxo do seu negócio — do primeiro
              contato do lead até o pós-venda e a cobrança.
            </p>
            <ul className="space-y-3">
              {[
                "Orquestração inteligente entre agentes (multi-agent)",
                "Integração nativa com WhatsApp, CRM, ERP e Kommo",
                "Base de conhecimento privada e segura da sua empresa",
                "Handoff humano quando o caso exige",
                "Dashboards de performance e auditoria de cada decisão",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-card">
        <SectionHeader
          badge="Por que IA na sua empresa"
          title={
            <>
              Resultados <span className="text-gradient">mensuráveis</span> desde o primeiro mês
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
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

      {/* Process */}
      <Section>
        <SectionHeader
          badge="Como implantamos"
          title={
            <>
              Do diagnóstico à <span className="text-gradient">operação autônoma</span>
            </>
          }
          description="Metodologia estruturada para implantar agentes de IA com segurança, governança e resultado."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="premium-card p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-display font-bold text-gradient mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={workflowImg}
                alt="Operação autônoma com IA"
                className="w-full h-auto"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tecnologia de ponta, <span className="text-gradient">resultado de negócio</span>.
            </h3>
            <p className="text-muted-foreground mb-4">
              Combinamos modelos de linguagem avançados (GPT, Claude, Gemini),
              orquestração multi-agente, RAG com sua base de conhecimento e
              integrações via API para entregar agentes que realmente operam — não
              apenas conversam.
            </p>
            <p className="text-muted-foreground">
              Tudo com governança, logs auditáveis, controle de custos e
              evolução contínua acompanhada pelo nosso time.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Bot size={48} className="text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para montar seu <span className="text-gradient">time de IA</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fale com um especialista e descubra quais agentes podem transformar
              a operação da sua empresa nos próximos 30 dias.
            </p>
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar com especialista
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}