import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/Screenshot 2025-01-03 143514.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-border">
      <div className="container hero-inner">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="tag">Hello!</span>
          <h1>
            This is <span style={{ color: "var(--accent)" }}>Rushil Dwaraka</span>
          </h1>
          <p>
            Web Dev learner and a curious student at VIT Chennai<br></br>
            who is exlporing various domains of computer science and business.
          </p>

          <div className="hero-actions">
            
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.7 }}
        >
          <img src={heroImg} alt="profile" className="hero-photo" />
        </motion.div>
      </div></div>
    </section>
  );
}
