import Extension from "./components/Extension";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Project from "./components/Project";
import Customise from "./components/Customise";
import Work from "./components/Work";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <Project/>
      <Extension/>
      <Customise/>
      <Work />
      <Sponsors />
      <Footer />
    </div> 
    
  );
}
