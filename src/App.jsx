import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import './App.css'

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

  const foregroundOptions = useMemo(() => ({
    // background: { color: { value: "#090A0F" } },
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
        speed: { min: 0.2, max: 0.5 }, // Random star movement speed
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
        value: 80
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

  const backgroundOptions = useMemo(() => ({
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
        speed: { min: 1, max: 1.5 }, // Random star movement speed
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
        value: 100
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
      <div
        style={{
          color: "#fff",
          background: "#0d47a1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Initializing...
      </div>
    );
  }

  return (
    <Router>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* Background stars */}
        <Particles
          id="background-stars"
          options={backgroundOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />

        {/* Foreground stars */}
        <Particles
          id="foreground-stars"
          options={foregroundOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        />

        {/* Navigation */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            zIndex: 1,
            position: "sticky",
            top: 0,
            // backgroundColor: "#1c1d22"
          }}
        >
          {/* Left Logo and Social Media Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

            {/* Logo */}
            <Link to="/" className="logo">
              <img src="/N2.png" alt="My Logo" />
            </Link>

            {/* Social Media Icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a 
                href="https://linkedin.com/in/nathancastle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img 
                  src="/linkedin.png" 
                  alt="LinkedIn" 
                />
              </a>
              <a 
                href="https://github.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img 
                  src="/github.png" 
                  alt="GitHub" 
                />
              </a>
              <a 
                href="https://instagram.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img 
                  src="/instagram.png" 
                  alt="Instagram" 
                />
              </a>
            </div>
          </div> 

          {/* Navigation Links */}
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About Me</Link>
            <Link to="/experience" style={linkStyle}>Experience</Link>
            <Link to="/skills" style={linkStyle}>Skills</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                  textAlign: "center",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <h1 style={{ fontSize: "3em", marginBottom: "20px" }}>
                  Hello, I am Nathan Castle
                </h1>
                <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "Machine Learning Engineer",
                        "Data Scientist",
                        "AI Engineer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 50,
                    }}
                  />
                </h2>
                <Link to="/about">
                  <button
                    style={{
                      marginTop: "20px",
                      padding: "10px 20px",
                      backgroundColor: "#3B82F6",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "1em",
                    }}
                  >
                    About Me
                  </button>
                </Link>
              </section>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.5em"
};

export default App;
