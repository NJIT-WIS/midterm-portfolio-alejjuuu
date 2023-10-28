import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About/>
      <Footer />

      {/* Your other components and content*/}
    </div>
  );
}
