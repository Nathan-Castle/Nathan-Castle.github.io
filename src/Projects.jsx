import React from "react";

const AboutMe = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#1B2735",
          color: "#FFF",
          padding: "20px",
        }}
      >
        Sidebar
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          backgroundColor: "#090A0F",
          color: "#FFF",
          padding: "20px",
        }}
      >
        Main Page Content
      </main>
    </div>
  );
};

export default AboutMe;
