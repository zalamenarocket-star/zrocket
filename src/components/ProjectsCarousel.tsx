import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  link: string | null;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
        Últimos Projetos
      </h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                <div className="premium-card overflow-hidden">
                    <div className="relative aspect-[16/10] bg-muted">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Em breve</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex items-center justify-between">
                          <span className="text-xs md:text-sm font-medium text-foreground">{project.title}</span>
                          <ExternalLink size={16} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 md:p-4">
                      <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{project.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="premium-card overflow-hidden">
                  <div className="relative aspect-[16/10] bg-muted">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Em breve</span>
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-4">
                    <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{project.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          <CarouselPrevious className="static translate-y-0 h-8 w-8 md:h-10 md:w-10" />
          <CarouselNext className="static translate-y-0 h-8 w-8 md:h-10 md:w-10" />
        </div>
      </Carousel>
    </motion.div>
  );
}
