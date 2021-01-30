import Theme from "./Theme.jsx";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Dummy from "./Components/Dummy.jsx";
import Header from "./Components/Header.jsx";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <Footer />
      </Container>
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
    </Theme>
  );
}

export default App;
