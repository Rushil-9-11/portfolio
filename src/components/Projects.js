import React from "react";
import { motion } from "framer-motion";


const projects = [
  { title: "project 1", desc: "", img: "", url: "", target:"_blank" },
  { title: "project 2", desc: "", img: "", url: "", target: "_blank" },
  { title: "project 3", desc: "", img: "", url: "", target: "_blank" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>Projects</motion.h2>

      <motion.div className="projects-grid" initial="hidden" whileInView="show" viewport={{once:true}}>
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{type:"spring", stiffness:300}}
          >
            <img src={p.img} alt={p.title} />
            <div className="project-overlay">
              <h3 style={{margin:0}}>{p.title}</h3>
              <p style={{margin:0, fontSize:13, opacity:0.95}}>{p.desc}</p>
              <div style={{marginTop:8}}>
                <a href={p.url} target={p.target} rel="noopener noreferrer"  className="btn" style={{textDecoration:"none"}}>View</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
