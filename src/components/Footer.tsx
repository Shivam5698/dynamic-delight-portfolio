import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm py-8 border-t border-primary/20 relative overflow-hidden">
      {/* Subtle animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Sachin Yadav. Built with
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            using React, TypeScript, and Framer Motion
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Data Science Enthusiast • Community Builder • Tech Leader
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
