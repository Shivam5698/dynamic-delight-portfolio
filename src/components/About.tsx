import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(false);

  const professionalBackground = `I am a passionate Data Science student and tech leader pursuing B.Tech CSE (Batch 2023–27) at NITRA Technical Campus. I build full-stack data-driven applications, lead community initiatives, and mentor peers in machine learning, data engineering, and competitive hackathons. As the founder of Hackgyanverse and Editorial Co-Lead of CODSOC, I drive collaborative learning and organize events that connect students with real-world problems. I enjoy turning messy data into meaningful stories, building reproducible ML pipelines, and shipping delightful user experiences.`;

  const shortText = professionalBackground.slice(0, 200) + "...";

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 18 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Get to know more about my journey
          </p>

          <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-[var(--shadow-card)] border-2 hover:border-primary/30 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Professional Background
              </h3>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                {expanded ? professionalBackground : shortText}
              </p>

              <Button
                variant="ghost"
                onClick={() => setExpanded(!expanded)}
                className="text-primary hover:text-primary/80"
              >
                {expanded ? "Read less" : "Read more"}
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">2023-27</div>
                  <div className="text-muted-foreground">B.Tech CSE</div>
                  <div className="text-sm text-muted-foreground">NITRA Technical Campus</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                  <div className="text-muted-foreground">Communities</div>
                  <div className="text-sm text-muted-foreground">Founded & Leading</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">7+</div>
                  <div className="text-muted-foreground">Hackathons</div>
                  <div className="text-sm text-muted-foreground">Participated</div>
                </motion.div>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
