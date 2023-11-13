import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarD from '../components/navbar';
import Footer from '../components/footer';

function Cadastro() {
  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="text" placeholder="Nome do produto" />
        <Form.Text className="text-muted">
   
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="number" placeholder="Quantidade" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="Submit">
        Cadastrar Produto
      </Button>
    </Form>
  );
}

export default Cadastro;