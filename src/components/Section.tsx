import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
