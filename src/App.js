import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Footer></Footer>
    </>
  );
}

export default App;
