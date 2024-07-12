import "./App.css";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import { Container } from "./components/Container";
import ResponsiveAppBar from "./components/Navbar";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";

function App() {
  return (
    <Container>
      <ResponsiveAppBar />
      <Section1></Section1>
      <Section2></Section2>

      <Titulo> Check your time and weather</Titulo>
      <Parrafo> Holaaa </Parrafo>
    </Container>
  );
}

export default App;
