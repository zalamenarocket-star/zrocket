import { Link } from "react-router-dom";
import { ArrowRight, Globe, MessageSquare, BarChart3, Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import { SolutionCard } from "@/components/SolutionCard";
import { useInView } from "@/hooks/use-in-view";
import heroBg from "@/assets/hero-bg.webp";
import marketingImg from "@/assets/marketing-analytics.webp";
import teamImg from "@/assets/team-collaboration.webp";

const WHATSAPP_LINK = "https://wa.me/5511969192223?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Z%20Rocket.";

const solutions = [
  {
    icon: <Globe size={28} className="text-primary-foreground" />,
    title: "Criação de Sites",
    description: "Sites profissionais, rápidos e pensados para converter visitantes em contatos e vendas.",
    href: "/criacao-de-sites",
  },
  {
    icon: <MessageSquare size={28} className="text-primary-foreground" />,
    title: "Automação",
    description: "Automação inteligente para WhatsApp e Instagram, organizando atendimentos e acelerando vendas.",
    href: "/automacao",
  },
  {
    icon: <BarChart3 size={28} className="text-primary-foreground" />,
    title: "Tráfego Pago Focado em Conversões",
    description: "Campanhas estratégicas para gerar leads e vendas com controle total de investimento.",
    href: "/trafego-pago",
  },
  {
    icon: <Lightbulb size={28} className="text-primary-foreground" />,
    title: "Consultoria de Marketing",
    description: "Diagnóstico, estratégia e organização para empresas que querem crescer de forma estruturada.",
    href: "/consultoria",
  },
];

const stats = [
  { value: "500+", label: "Projetos Entregues" },
  { value: "95%", label: "Clientes Satisfeitos" },
  { value: "5x", label: "Retorno Médio em Vendas" },
];

function AnimateIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-40"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-30 z-0" />

        <div className="section-container relative z-10 py-20">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="animate-[fade-in_0.6s_ease-out_both]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Rocket size={16} />
                Performance Marketing
              </span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-[fade-in_0.8s_ease-out_0.1s_both]"
            >
              Marketing digital focado em{" "}
              <span className="text-gradient">conversões, vendas</span> e crescimento real.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-[fade-in_0.8s_ease-out_0.2s_both]">
              A Z Rocket ajuda empresas a estruturarem e escalarem o marketing digital com 
              estratégias focadas em performance, geração de leads e resultados mensuráveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
              <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Falar com um especialista
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/contato">
                  Conhecer soluções
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mt-20 mx-auto lg:mx-0 animate-[fade-in_0.8s_ease-out_0.5s_both]">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Target size={16} />
              Nossa Abordagem
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Estratégias que se transformam em <span className="text-gradient">resultados.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Estruturamos estratégias personalizadas, alinhadas ao seu negócio, com foco 
              total em conversão, vendas e previsibilidade de crescimento.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Trabalhamos com dados, automação e processos claros para transformar 
              marketing em resultado.
            </p>
            <Button asChild variant="cta" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Quero escalar meu marketing
                <ArrowRight size={18} />
              </a>
            </Button>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={marketingImg} 
                alt="Marketing Digital Analytics" 
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3">
              {[
                { icon: Target, label: "Foco em Conversão" },
                { icon: TrendingUp, label: "Crescimento Escalável" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="premium-card p-4 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-2">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Section>

      {/* Solutions Section */}
      <Section>
        <SectionHeader
          badge="Soluções"
          title={
            <>
              Tudo que sua empresa precisa para{" "}
              <span className="text-gradient">vender mais</span>
            </>
          }
          description="Oferecemos soluções completas de marketing digital focadas em gerar resultados reais para o seu negócio."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <AnimateIn key={solution.title} delay={index * 100}>
              <SolutionCard {...solution} />
            </AnimateIn>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Pronto para estruturar seu marketing e{" "}
              <span className="text-gradient">vender mais</span> todos os dias?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fale agora com um especialista no WhatsApp e descubra como podemos 
              ajudar sua empresa a crescer de forma estruturada e previsível.
            </p>
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Falar com um especialista
                <ArrowRight size={20} />
              </a>
            </Button>
          </AnimateIn>

          <AnimateIn delay={200} className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamImg} 
                alt="Equipe de marketing colaborando" 
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
              />
            </div>
          </AnimateIn>
        </div>
      </Section>
    </Layout>
  );
}
