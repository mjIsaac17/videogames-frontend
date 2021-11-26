import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./login.css";

const LoginScreen = () => {
  return (
    <Form className="login-container">
      <Card className="login-card">
        <Card.Body>
          <Card.Title>Sign in</Card.Title>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Card.Body>
        <Card.Body>
          <div className="login-button-area">
            <Button type="button" variant="outline-dark">
              Register
            </Button>

            <Button type="button" variant="outline-primary">
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default LoginScreen;
