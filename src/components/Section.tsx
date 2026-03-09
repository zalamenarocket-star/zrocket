import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

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
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16 transition-all duration-600 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
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
    </div>
  );
}
