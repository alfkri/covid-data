import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CovidIndo from "../../components/CovidIndo/CovidIndo";
import CovidProv from "../../components/CovidProv/CovidProv";
import Footer from "../../components/Footer/Footer";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CovidIndo />
      <CovidProv />
      <Footer />
    </div>
  );
}

export default HomePage;
