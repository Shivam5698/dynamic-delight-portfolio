import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Mail, url: "mailto:sachin@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Animated orbs */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's build something amazing together
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 shadow-[var(--shadow-card)] border-2 hover:border-primary/30 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-8 shadow-[var(--shadow-card)] border-2">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>sachin@example.com</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-[var(--shadow-card)] border-2">
                <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
