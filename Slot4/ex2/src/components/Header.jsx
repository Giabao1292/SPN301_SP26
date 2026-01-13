import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./SearchBar";

function Header({ onSearch }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fluid>
      <Container fluid>
        <Navbar.Brand href="/">🌸 Orchid Shop</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav>

          <SearchBar onSearch={onSearch} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
