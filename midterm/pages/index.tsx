import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Skills from "./Skills";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About/>
      <Skills/>
      <Experience/>
      <Footer />

      {/* Your other components and content*/}
    </div>
  );
}
