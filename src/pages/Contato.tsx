import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";

const WHATSAPP_LINK = "https://wa.me/5511969192223";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 11 96919-2223",
    href: WHATSAPP_LINK,
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@zrocket.com.br",
    href: "mailto:contato@zrocket.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP",
    href: null,
  },
];

export default function Contato() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Fale com a <span className="text-gradient">Z Rocket</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Entre em contato e descubra como podemos estruturar o marketing da sua 
              empresa de forma estratégica e focada em resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild variant="cta" size="xl">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Falar com um especialista no WhatsApp
                  <ArrowRight size={20} />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <Section className="bg-card">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="premium-card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center mx-auto mb-6">
                <info.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {info.label}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Main CTA */}
      <Section>
        <motion.div
          className="premium-card p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-8">
              <MessageCircle size={40} className="text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vamos conversar sobre seu <span className="text-gradient">projeto</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Estamos prontos para ajudar sua empresa a crescer. Clique no botão abaixo 
              e fale diretamente com um de nossos especialistas.
            </p>
            <Button asChild variant="cta" size="xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Iniciar conversa no WhatsApp
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
