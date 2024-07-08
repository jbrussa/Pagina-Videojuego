import "./App.css";
import Titulo from "./components/Titulo/Titulo";
import Parrafo from "./components/Parrafo/Parrafo";
import { Container } from "./components/Container/Container";
import ResponsiveAppBar from "./components/Navbar/Navbar";

function App() {
  return (
    <Container>
      <ResponsiveAppBar />
      <Titulo> Check your time and weather</Titulo>
      <Parrafo> Holaaa </Parrafo>
    </Container>
  );
}

export default App;
