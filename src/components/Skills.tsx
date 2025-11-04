import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const skillsData = [
  { name: "Python", level: 90, category: "Programming", projects: ["ML Pipeline", "Data Analysis"] },
  { name: "React/Next.js", level: 85, category: "Frontend", projects: ["Portfolio", "Dashboard"] },
  { name: "Machine Learning", level: 88, category: "Data Science", projects: ["Sentiment Analysis", "Prediction Models"] },
  { name: "MongoDB", level: 80, category: "Database", projects: ["Full-Stack Apps"] },
  { name: "Data Engineering", level: 82, category: "Data Science", projects: ["ETL Pipelines"] },
  { name: "Node.js/Express", level: 85, category: "Backend", projects: ["REST APIs"] },
  { name: "TensorFlow/PyTorch", level: 75, category: "Data Science", projects: ["Deep Learning Models"] },
  { name: "TypeScript", level: 88, category: "Programming", projects: ["Type-Safe Apps"] },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies I work with
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
              >
                <Card className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-2xl font-bold gradient-text">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated progress bar */}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-3">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                    />
                  </div>

                  {/* Projects using this skill */}
                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project) => (
                      <Badge
                        key={project}
                        variant="outline"
                        className="text-xs hover:bg-primary/10 transition-colors cursor-pointer"
                      >
                        {project}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
