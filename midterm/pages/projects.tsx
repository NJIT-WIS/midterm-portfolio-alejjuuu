// pages/projects.tsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/All_Projects"
import ProjectSpecs from "@/components/Project";

// Import any other components you need for this page.

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <Project/>
      <ProjectSpecs />

      <Footer />
    </div>
  );
};

export default ProjectsPage;
