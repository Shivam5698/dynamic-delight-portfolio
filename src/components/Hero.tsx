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
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image with Gradient Ring */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 18 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ padding: "6px" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Profile image */}
              <motion.img
                src={profileImage}
                alt="Sachin Yadav"
                className="absolute inset-[6px] rounded-full object-cover w-[calc(100%-12px)] h-[calc(100%-12px)]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
            className="text-center md:text-left max-w-2xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Sachin Yadav</span>
            </motion.h1>

            <div className="h-24 md:h-20 mb-8">
              <TypeAnimation
                sequence={[
                  "Data Science Enthusiast",
                  2000,
                  "Community Builder",
                  2000,
                  "Tech Leader",
                  2000,
                  "Full-Stack Developer",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-4xl text-muted-foreground"
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Building full-stack data-driven applications and leading communities
              at NITRA Technical Campus. Turning messy data into meaningful stories.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
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
