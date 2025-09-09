import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer container">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ fontWeight: 700 }}>Rushil Dwaraka</div>
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div className="socials">
          <a href="https://github.com/Rushil-9-11" aria-label="github">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/d-b-sai-rushil-640217358/"
            aria-label="linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
        <div style={{ color: "var(--muted)", fontSize: 18 }}>
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
