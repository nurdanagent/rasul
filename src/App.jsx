import "./App.css";
import Bro from "./bro/Bro";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TrendingSongs from "./box/Box";

function App() {
  return (
    <div>
      <Header />
      <Bro />
      <TrendingSongs />
      <Footer />
    </div>
  );
}

export default App;
