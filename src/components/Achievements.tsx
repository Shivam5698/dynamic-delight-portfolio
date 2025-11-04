import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Users, Code, Lightbulb } from "lucide-react";

const achievementsData = [
  {
    title: "Founder - Hackgyanverse Community",
    org: "Hackgyanverse",
    date: "Aug 2024",
    description: "Founded a tech community focused on collaborative learning and hackathons. Grew to 500+ active members across multiple colleges.",
    icon: Users,
    includeInResume: true,
  },
  {
    title: "Editorial Co-Lead - CODSOC",
    org: "NITRA Technical Campus",
    date: "Sep 2023 - Present",
    description: "Leading the official coding club, organizing workshops, contests, and mentoring students in competitive programming and development.",
    icon: Code,
    includeInResume: true,
  },
  {
    title: "Hackathon - IIIT Delhi",
    org: "IIIT Delhi",
    date: "Mar 2024",
    description: "Built an AI-powered solution for urban planning. Competed with 100+ teams from top institutions.",
    icon: Trophy,
    includeInResume: true,
  },
  {
    title: "Hackathon - IIT Kanpur",
    org: "IIT Kanpur",
    date: "Jan 2024",
    description: "Developed a machine learning model for predictive maintenance in manufacturing. Top 20 finish.",
    icon: Trophy,
    includeInResume: true,
  },
  {
    title: "Hack LLM Participant",
    org: "Hack LLM",
    date: "Nov 2023",
    description: "Created an innovative LLM-powered application for educational content generation.",
    icon: Lightbulb,
    includeInResume: true,
  },
  {
    title: "Hacknovate Participant",
    org: "Hacknovate",
    date: "Oct 2023",
    description: "Built a social impact project focused on healthcare accessibility using data analytics.",
    icon: Trophy,
    includeInResume: true,
  },
  {
    title: "Smart India Hackathon (SIH)",
    org: "Government of India",
    date: "Aug 2023",
    description: "Participated in India's biggest hackathon, developing solutions for real-world government challenges.",
    icon: Trophy,
    includeInResume: true,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Building communities and competing at top institutions
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 50, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Card className="p-6 h-full hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {achievement.date}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      
                      <p className="text-sm text-primary mb-3">{achievement.org}</p>
                      
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
