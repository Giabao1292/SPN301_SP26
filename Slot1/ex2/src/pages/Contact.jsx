import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>Email: student@email.com</Card.Text>
          <Button variant="success">Send Message</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
