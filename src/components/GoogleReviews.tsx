import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const reviews = [
  {
    name: "Douglas",
    text: "Atendimento impecável, entrega rápida e resultados que aparecem no faturamento.",
    rating: 5,
  },
  {
    name: "Lucas Zalamena",
    text: "Contratei para minhas empresas, o resultado foi sensacional, super indico!",
    rating: 5,
  },
  {
    name: "Núcleo da Transformação Humana",
    text: "Parabéns pelo trabalho, essa equipe merece muitas indicações!",
    rating: 5,
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Z+Rocket+%7C+Ag%C3%AAncia+de+Marketing+Digital&kgmid=/g/11kjmfy7x1#lrd=0xf94a32d357446b5:0xb43511eb1362b2d2,1";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <Section>
      <SectionHeader
        badge="Avaliações"
        title={
          <>
            O que nossos clientes dizem no{" "}
            <span className="text-gradient">Google</span>
          </>
        }
        description="Nota 5.0 com base em 11 avaliações no Google Meu Negócio."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            className="premium-card p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Stars count={review.rating} />
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">Google Reviews</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium text-sm"
        >
          Ver todas as avaliações no Google
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
}
