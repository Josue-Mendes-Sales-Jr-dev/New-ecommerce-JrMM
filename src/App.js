import "./App.css";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import New from "./component/new/New";
import Contact from "./component/contact/Contact";
import Slider from "./component/slider/Slider";
import Photo0 from "./component/img/jaqueta.jpg";
import Photo1 from "./component/img/calça01.jpg";
import Photo2 from "./component/img/oculos02.jpg";
import Footer from "./component/footer/Footer";

import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" fixed="top" variant={"dark"}>
        <Container>
          <Navbar.Brand href="/#">JR'MM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#">Home</Nav.Link>
              <Nav.Link href="/#Main">Main</Nav.Link>
              <Nav.Link href="#new">New</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Navbar.Brand href="/#"><FontAwesomeIcon icon={faBasketShopping} /> </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Header />

      <Main
        title="Destaques"
        name="Jaquetá"
        name1="Calça"
        name2="Óculos"
        price="R$ 800"
        price1="R$ 300"
        price2="R$ 500"
        Photo={Photo0}
        Photo1={Photo1}
        Photo2={Photo2}
      />

      <Slider />

      <New
        title="Bermuda Moletom"
        title1="bermuda Jeans"
        title2="bermuda social"
        title3="bermuda slin"
        price="R$ 210"
        price1="R$ 208"
        price2="R$ 178"
        price3="R$ 239"
      />



      <Contact />

      <Footer />
    </div>
  );
}

export default App;
