import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import SearchBar from "./SearchBar";
import HomeCarousel from "./Carousel";
import { useAuth } from "../context/AuthContext"; // ✅ import AuthContext

function Header({ onSearch }) {
  const { state } = useAuth(); // Lấy trạng thái login từ context

  return (
    <>
      {/* CAROUSEL Ở TRÊN HEADER */}
      <HomeCarousel />

      {/* HEADER */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">🌸 Orchid Shop</Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            {/* LEFT MENU */}
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>

            {/* RIGHT SIDE (SEARCH + LOGIN) */}
            <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2">
              <Button
                variant="warning"
                className="w-lg-auto"
                href="/manage-orchids"
              >
                Manage Orchids
              </Button>

              <SearchBar onSearch={onSearch} className="w-100 w-lg-auto" />

              {/* ✅ Hiển thị nút login nếu chưa đăng nhập */}
              {!state.isAuthenticated && (
                <Button
                  variant="outline-light"
                  href="/login"
                  className="w-100 w-lg-auto"
                >
                  Login
                </Button>
              )}

              {/* Optional: có thể hiển thị tên user hoặc nút logout */}
              {state.isAuthenticated && (
                <span style={{ color: "white" }}>Hi, {state.username}</span>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
