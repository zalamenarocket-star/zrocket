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
  Search,
  Puzzle,
  Rocket,
  Lock,
  Database,
  Globe,
  Workflow,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/ai-agents-hero.webp";
import teamImg from "@/assets/ai-team.webp";
import workflowImg from "@/assets/ai-workflow.webp";
import corporateImg from "@/assets/ai-corporate.webp";

const WHATSAPP_LINK =
  "https://wa.me/5511969192223?text=Olá!%20Quero%20uma%20consultoria%20de%20Agentes%20de%20IA%20sob%20medida%20com%20a%20Z%20Rocket.";

const consultingPillars = [
  {
    icon: Search,
    title: "Diagnóstico profundo",
    description:
      "Mergulhamos na sua operação, mapeamos processos, gargalos e dados — entendendo o que realmente importa para o seu negócio antes de propor qualquer agente.",
  },
  {
    icon: Puzzle,
    title: "Solução sob medida",
    description:
      "Nada de plataforma genérica. Plugamos os modelos, integrações e fluxos certos para o seu cenário, com a cara, o tom e as regras da sua empresa.",
  },
  {
    icon: Rocket,
    title: "Implementação chave na mão",
    description:
      "Nosso time executa tudo: arquitetura, integrações, treinamento dos agentes, testes e go-live. Você não precisa de equipe técnica nem aprender ferramenta.",
  },
  {
    icon: ShieldCheck,
    title: "Operação assistida",
    description:
      "Acompanhamos os agentes em produção, ajustamos prompts, evoluímos integrações e medimos resultado mês a mês. Você só usa — a gente cuida do resto.",
  },
];

const faqs = [
  {
    q: "Vocês vendem uma plataforma de IA?",
    a: "Não. Somos uma consultoria de IA. Avaliamos o seu cenário e implementamos a melhor combinação de modelos (GPT, Claude, Gemini), ferramentas e integrações para o seu caso — sem prender você a uma plataforma única.",
  },
  {
    q: "Vou precisar de equipe técnica para usar?",
    a: "Não. Entregamos os agentes prontos, integrados aos seus canais (WhatsApp, CRM, ERP, e-mail, site) e treinados com a sua base. Sua equipe apenas usa e acompanha os resultados.",
  },
  {
    q: "Quanto tempo leva para colocar um agente em produção?",
    a: "Projetos típicos vão ao ar entre 3 e 6 semanas, dependendo da complexidade das integrações e da maturidade dos processos atuais.",
  },
  {
    q: "Como fica a segurança dos meus dados?",
    a: "Trabalhamos com modelos que não treinam com seus dados, conexões criptografadas, controle de acesso por papel e aderência à LGPD. Sua base de conhecimento é sempre privada.",
  },
  {
    q: "Faz sentido para empresas pequenas ou só para grandes?",
    a: "Faz sentido para qualquer empresa com processos recorrentes — atendimento, vendas, suporte, financeiro. Adaptamos o escopo ao porte e ao momento do seu negócio.",
  },
];

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
      {/* Dark-mode background ornamentation: dot grid + mesh glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block overflow-hidden">
        {/* White dot grid */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Aurora / mesh glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[55%] h-[55%] rounded-full blur-[140px] bg-[#0066FF]/15" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[140px] bg-[#1FA2FF]/10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[40%] rounded-full blur-[160px] bg-[#1FA2FF]/[0.06]" />
        {/* Vignette to keep edges anchored */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(3,7,18,0.85) 100%)",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-4 pb-12 md:py-32 overflow-x-clip">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl hidden md:block dark:hidden" />

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
                Consultoria em Agentes de IA
              </motion.span>

              <motion.h1
                className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-gradient">Agentes de IA sob medida</span> para sua empresa. Você não faz nada — só usa.
              </motion.h1>

              <motion.p
                className="text-sm md:text-lg lg:text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Não somos uma plataforma. Somos uma consultoria que entende o seu cenário,
                desenha a estratégia de IA e implementa os agentes certos — integrados
                aos seus canais e sistemas, prontos para operar do primeiro dia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero uma consultoria
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/contato">Agendar diagnóstico</Link>
                </Button>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Diagnóstico gratuito</span>
                <span className="inline-flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Implantação chave na mão</span>
                <span className="inline-flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Aderente à LGPD</span>
              </div>
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

      {/* Pillars - Consultoria */}
      <Section>
        <SectionHeader
          badge="Como atuamos"
          title={<>Consultoria, não <span className="text-gradient">plataforma</span></>}
          description="Cada empresa tem um cenário único. Nossa consultoria entende o seu negócio e pluga apenas o que faz sentido para gerar resultado — sem você ter que operar nada."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultingPillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="premium-card p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                <p.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

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

      {/* Multi-model stack */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Brain size={16} /> Stack multi-modelo
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O melhor modelo para <span className="text-gradient">cada tarefa</span>. Sem você pensar nisso.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Combinamos GPT, Claude, Gemini e modelos open-source na arquitetura
              do seu projeto. Você não precisa escolher LLM, ajustar prompt nem se
              preocupar com crédito ou limite. A consultoria orquestra tudo por trás.
            </p>
            <ul className="space-y-3">
              {[
                "Roteamento inteligente entre modelos por custo e qualidade",
                "RAG com a base de conhecimento privada da sua empresa",
                "Integrações nativas com WhatsApp, CRM, ERP e Kommo",
                "Monitoramento contínuo de qualidade e custos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { icon: Brain, label: "LLMs Premium", desc: "GPT, Claude, Gemini" },
              { icon: Database, label: "Base privada", desc: "RAG sobre seus dados" },
              { icon: Workflow, label: "Orquestração", desc: "Multi-agente coordenado" },
              { icon: Globe, label: "Integrações", desc: "API, WhatsApp, CRM, ERP" },
            ].map((c) => (
              <div key={c.label} className="premium-card p-5">
                <c.icon className="text-primary mb-3" size={28} />
                <div className="font-display font-semibold text-foreground">{c.label}</div>
                <div className="text-sm text-muted-foreground">{c.desc}</div>
              </div>
            ))}
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

      {/* Security */}
      <Section className="bg-card">
        <SectionHeader
          badge="Segurança e governança"
          title={<>Privacidade, controle e <span className="text-gradient">aderência à LGPD</span></>}
          description="Sua operação roda com clareza, controle e segurança em cada etapa."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: "Seus dados não treinam modelos", desc: "Conteúdo, conversas e documentos da empresa permanecem privados e fora de qualquer treinamento público." },
            { icon: ShieldCheck, title: "Acesso controlado", desc: "Permissões por papel, autenticação reforçada e logs auditáveis de cada interação dos agentes." },
            { icon: Database, title: "Aderência à LGPD", desc: "Arquitetura desenhada para conformidade, com tratamento responsável de dados sensíveis." },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              className="premium-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          badge="Dúvidas frequentes"
          title={<>Tudo o que você precisa saber <span className="text-gradient">antes de começar</span></>}
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="premium-card px-5">
                <AccordionTrigger className="text-left font-display text-base md:text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              Vamos desenhar a <span className="text-gradient">IA da sua empresa</span> juntos?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Agende um diagnóstico gratuito com nossos consultores. Mostramos quais
              agentes fazem sentido para o seu cenário e como entregamos tudo pronto
              para você apenas usar.
            </p>
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Quero meu diagnóstico gratuito
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}