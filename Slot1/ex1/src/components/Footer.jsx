import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Cột 1: Hình ảnh */}
          <Col md={4}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/500px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png"
              alt="Logo"
              height="200
              "
            />
          </Col>

          {/* Cột 2: Copyright */}
          <Col md={4} className="text-center">
            © 2024 All rights reserved
          </Col>

          {/* Cột 3: Email */}
          <Col md={4} className="text-md-end">
            giabao362004@gmail.com
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#222",
    color: "#fff",
    padding: "20px 0",
    marginTop: "auto",
  },
};

export default Footer;
