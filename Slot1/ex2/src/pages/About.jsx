import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            This page is created using React, Vite and React Bootstrap. It
            demonstrates basic routing with React Router.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
