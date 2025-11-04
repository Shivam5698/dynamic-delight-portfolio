import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "NITRA Technical Campus",
    degree: "B.Tech in Computer Science & Engineering",
    startDate: "2023",
    endDate: "2027",
    details: [
      "Specialization in Data Science and Machine Learning",
      "Active member of CODSOC - Editorial Co-Lead",
      "Founder of Hackgyanverse Community",
      "Participated in 7+ national level hackathons",
    ],
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My academic journey
          </p>

          <div className="max-w-4xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-[31px] top-[60px] bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

                <Card className="p-8 mb-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/30 ml-0 md:ml-16">
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                      }}
                    >
                      <div className="absolute -left-[47px] md:-left-[63px] top-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    <div className="flex-1 pt-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                          <p className="text-lg text-primary">{edu.institution}</p>
                        </div>
                        <div className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full mt-2 md:mt-0 w-fit">
                          {edu.startDate} - {edu.endDate}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + idx * 0.1 + 0.4,
                            }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
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

export default Education;
