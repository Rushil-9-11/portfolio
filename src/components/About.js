import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about container">
      <div style={{display:"flex", flexDirection:"column", gap:18}}>
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>About Me</motion.h2>
        <motion.div className="about-grid" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
          <div>
            <div className="about-card">
              <p>
                I’m a B.Tech CSE student at VIT with a keen interest in coding, software development, and exploring new technologies. I enjoy building projects, solving problems, and continuously improving my skills in computer science.<br></br><br></br>
                 I am constantly looking to expand my skills through hands-on projects, hackathons, and collaborative learning. With a strong foundation in programming and an eagerness to learn, I aim to build impactful solutions while growing as a developer and problem-solver.
              </p>

              <div style={{marginTop:16}}>
                <h3 style={{marginBottom:8}}>Tech Skills:</h3>
                <div className="skills">
                  <div className="skill">React and JS</div>
                  <div className="skill">python</div>
                  <div className="skill">c , c++ and java</div>
                  <div className="skill">ml</div>
                  <div className="skill">Git</div>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="about-card">
              <h3>soft skills</h3>
              <ul style={{marginTop:10, color:"var(--muted)"}}>
                <li>leadership and team skills</li>
                <li>critical thinking and clutching</li>
                <li>ends conflicts with a win-win situation</li>
              </ul>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
