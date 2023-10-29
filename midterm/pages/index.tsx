import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Skills from "./Skills";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About/>
      <Skills/>
      <Footer />

      {/* Your other components and content*/}
    </div>
  );
}
