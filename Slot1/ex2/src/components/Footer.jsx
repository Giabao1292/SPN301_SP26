import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer
      style={{ background: "#f1f1f1", padding: "15px 0", marginTop: "auto" }}
    >
      <Container>
        <Row className="align-items-center text-center">
          <Col md={4}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png"
              alt="Logo"
              height="30"
            />
          </Col>
          <Col md={4}>© 2024 All rights reserved</Col>
          <Col md={4}>student@email.com</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
