import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from "typewriter-effect";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    }).catch((err) => {
      console.error("Error initializing particles engine:", err);
    });
  }, []);

  const options = useMemo(() => ({
    background: { color: { value: "#090A0F" } },
    fpsLimit: 120,
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false, // no connecting lines for stars
        opacity: 0.9,
        width: 1
      },
      move: {
        enable: true,
        speed: { min: 0.2, max: 1 }, // Random star movement speed
        direction: "top", // Falling effect
        straight: false, // Slight randomness
        outModes: {
          default: "out", // Stars disappear when they move out of view
        },
      },
      number: {
        density: { 
          enable: true,
          value_area: 800, 
        },
        value: 200
      },
      opacity: {
        value: { min: 0.1, max: 1 }, // Twinkling effect
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 }, // Varying star sizes
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
    },
    detectRetina: true
  }), []);

  if (!init) {
    return (
      <div style={{
        color: "#fff",
        background: "#0d47a1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        Initializing...
      </div>
    );
  }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden", color: "#fff" }}>
      <Particles
        id="tsparticles"
        options={options}
        style={{ position: "absolute", top:0, left:0, right:0, bottom:0, zIndex:0 }}
      />

      {/* Navigation */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        zIndex: 1,
        position: "relative"
      }}>
        <div style={{ fontWeight: "bold" }}>MY LOGO</div>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#work" style={linkStyle}>Work</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        zIndex: 1,
        position: "relative"
      }}>
        <h1 style={{ fontSize: "3em", marginBottom: "20px" }}>Hello, I am XYZ</h1>
        <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>
          <Typewriter
            options={{
              strings: ["Machine Learning Engineer", "Data Scientist", "MLOps Specialist"],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 50,
            }}
          />
        </h2>
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#3B82F6",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "1em"
        }}>
          View My Work
        </button>
      </section>
    </div>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};

export default App;
