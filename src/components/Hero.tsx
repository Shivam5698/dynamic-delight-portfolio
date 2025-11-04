import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./ui/button";
import { Download, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const handleDownloadResume = () => {
    // Client-side resume generation (placeholder for now)
    window.open("#contact", "_self");
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        {/* Animated orbs */}
        <motion.div
         className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image with Enhanced Gradient Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 18 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glowing animated gradient ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  rotate: [0, 360],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                  },
                  rotate: {
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }
                }}
                style={{ 
                  padding: "8px",
                  filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.6))",
                }}
              >
                <div className="w-full h-full rounded-full bg-card" />
              </motion.div>
              
              {/* Profile image with better visibility */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <img
                  src={profileImage}
                  alt="Sachin Yadav - Data Science Enthusiast"
                  className="w-full h-full object-cover object-center"
                  style={{
                    filter: "brightness(1.1) contrast(1.05)",
                  }}
                />
              </motion.div>

              {/* Additional glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(var(--primary) / 0.3)",
                    "0 0 60px hsl(var(--primary) / 0.6)",
                    "0 0 30px hsl(var(--primary) / 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Hero Content with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
            className="text-center md:text-left max-w-2xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Hi, I'm{" "}
              </motion.span>
              <span className="gradient-text relative">
                Sachin Yadav
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <div className="h-24 md:h-20 mb-8">
              <TypeAnimation
                sequence={[
                  "Data Science Enthusiast 📊",
                  2000,
                  "Machine Learning Engineer 🤖",
                  2000,
                  "Community Founder 🚀",
                  2000,
                  "Full-Stack Developer 💻",
                  2000,
                  "Hackathon Champion 🏆",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-4xl text-muted-foreground font-semibold"
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Transforming raw data into actionable insights at{" "}
              <span className="text-primary font-semibold">NITRA Technical Campus</span>.
              Leading <span className="text-accent font-semibold">Hackgyanverse</span> & <span className="text-accent font-semibold">CODSOC</span>,
              building ML pipelines, and competing at top institutions.
            </motion.p>

            {/* CTA Buttons with Enhanced Animation */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="group relative overflow-hidden shadow-lg hover:shadow-[var(--shadow-glow)]"
                >
                  <motion.span 
                    className="relative z-10"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    View My Work
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadResume}
                  className="group border-2 hover:border-primary/50 hover:bg-primary/10"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                  </motion.div>
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
