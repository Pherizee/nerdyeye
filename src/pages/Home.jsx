import Hero from "../components/homeSections/hero/Hero";
import JoinSection from "../components/homeSections/joinSection/JoinSection";
import OfferSection from "../components/homeSections/offerSection/OfferSection";
import IndustriesSection from "../components/homeSections/industriesSection/IndustriesSection";
import WhyJoin from "../components/homeSections/whyJoin/WhyJoin";
import HowSection from "../components/homeSections/howSection/HowSection";
import SuccessSection from "../components/homeSections/successSection/SuccessSection";
import ContactSection from "../components/homeSections/contactSection/ContactSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <HowSection />
      <JoinSection />
      <OfferSection />
      <IndustriesSection />
      <WhyJoin />
      <SuccessSection />
      <ContactSection />
    </main>
  );
};

export default Home;
