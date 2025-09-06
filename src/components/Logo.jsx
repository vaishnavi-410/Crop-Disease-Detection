// src/components/Logo.jsx
import React from "react";

const Logo = () => {
  return (
    <h1
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: "bold",
        color: "#2e7d32",
        display: "inline-flex",
        alignItems: "baseline", // keeps English + Marathi aligned
        fontSize: "clamp(20px, 4vw, 32px)", // responsive size
      }}
    >
      Agri
      <span
        style={{
          fontFamily: "'Noto Sans Devanagari', sans-serif",
          marginLeft: "-4px", // removes extra gap between Agri+मित्र
        }}
      >
    मित्र
      </span>
    </h1>
  );
};

export default Logo;
