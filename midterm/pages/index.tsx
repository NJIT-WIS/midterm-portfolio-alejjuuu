import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Footer />

      {/* Your other components and content*/}
    </div>
  );
}
