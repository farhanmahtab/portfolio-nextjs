"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-4 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primary tracking-tight">MAHI</h2>
          <p className="text-muted-foreground mt-2 text-sm">Building digital experiences that matter.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm italic"
        >
          &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Farhan Mahtab Mahi. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-6 mt-4 opacity-50 hover:opacity-100 transition-opacity">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-75" />
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
