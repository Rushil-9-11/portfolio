import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer container">
      <div style={{display:"flex", gap:12, alignItems:"center"}}>
        <div style={{fontWeight:700}}>Rushil Dwaraka</div>
      </div>

      <div style={{display:"flex", gap:16, alignItems:"center"}}>
        <div className="socials">
          
          <a href="" aria-label="github"><FaGithub /></a>
          
          <a href="" aria-label="linkedin"><FaLinkedin /></a>
          
        </div>
        <div style={{color:"var(--muted)", fontSize:18}}> {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
