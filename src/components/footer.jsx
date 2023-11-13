import Card from "react-bootstrap/Card";
import "../assets/css/style.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <>
      <Card className="footer bom">
        <Container>
          <Card.Body>
            <Card.Title>Entre Em contato</Card.Title>
            <Card.Text><a href="https://www.instagram.com">Instagram</a></Card.Text>
            <Card.Text><a href="https://www.Facebook.com">Facebook</a></Card.Text>
            <Card.Text><a href="https://www.Twitter.com">Twitter</a></Card.Text>
            <Card.Text><a href="https://www.Whatsapp.com">Whatsapp</a></Card.Text>

          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
export default Footer;
