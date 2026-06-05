import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PopularServices from "./components/PopularServices.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Footer from "./components/Footer.jsx";

function HomePage({ onLoginClick }) {
  return (
    <div className="site-shell">
      <Header onLoginClick={onLoginClick} />
      <main>
        <Hero />
        <PopularServices />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
