import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Colors from "./components/Colors";
import Specifications from "./components/Specifications";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Services />
        <Benefits />
        <Colors />
        <Specifications />
        <Roadmap />
        <Collaboration />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
