import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router";

import "./login.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <Form className="login-container">
      <Card className="login-card">
        <Card.Header className="text-center">
          <h4>Sign in to start</h4>
        </Card.Header>
        <Card.Body>
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
            <Button
              type="button"
              variant="outline-dark"
              onClick={() => navigate("/register")}
            >
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
