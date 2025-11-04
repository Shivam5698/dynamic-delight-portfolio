import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Event Sentiment Dashboard",
    subtitle: "Real-time sentiment analysis pipeline",
    description: "Built a full-stack sentiment analysis dashboard using Python, Flask, and BERT for real-time social media monitoring. Processes 10k+ tweets/hour with 92% accuracy.",
    techStack: ["Python", "Flask", "BERT", "MongoDB", "React", "D3.js"],
    featured: true,
    metrics: ["92% accuracy", "10k+ tweets/hour", "Real-time analytics"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "ML Model Registry",
    subtitle: "Centralized model versioning system",
    description: "Developed a model registry platform for tracking ML experiments, versions, and deployments. Integrated with MLflow and includes automated model performance monitoring.",
    techStack: ["Python", "MLflow", "FastAPI", "PostgreSQL", "Docker"],
    featured: true,
    metrics: ["50+ models tracked", "Automated versioning", "CI/CD integrated"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Hackgyanverse Platform",
    subtitle: "Community learning hub",
    description: "Founded and built the official platform for Hackgyanverse community. Features event management, resource sharing, and collaborative learning tools used by 500+ students.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    featured: true,
    metrics: ["500+ active users", "20+ events hosted", "Community-driven"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Data Pipeline Orchestrator",
    subtitle: "ETL automation framework",
    description: "Created a scalable ETL framework for automating data ingestion, transformation, and loading. Reduced data processing time by 70% with Apache Airflow orchestration.",
    techStack: ["Python", "Airflow", "Pandas", "AWS S3", "Spark"],
    featured: false,
    metrics: ["70% faster processing", "Automated workflows", "Scalable"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Dynamic particles effect */}
      <motion.div
        className="absolute top-20 right-40 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Building impactful solutions with modern technologies
          </p>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: hoveredIndex === index ? 2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="p-6 h-full flex flex-col hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30">
                    {project.featured && (
                      <Badge className="mb-4 w-fit bg-gradient-to-r from-primary to-accent">
                        Featured
                      </Badge>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                    
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-4 bg-muted/30 rounded-lg">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="text-center">
                          <div className="text-xs font-semibold text-primary">{metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:text-primary" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group"
                        onClick={() => window.open(project.repoUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:text-primary" />
                        Code
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
