import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Footer />
      {/* Your other components and content*/}
    </div>
  );
}
