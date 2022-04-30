import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
