import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

export function SolutionCard({ icon, title, description, href }: SolutionCardProps) {
  return (
    <div className="premium-card p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
      <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
        {icon}
      </div>
      
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 flex-1">
        {description}
      </p>
      
      <Link
        to={href}
        className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group"
      >
        Saiba mais
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
