import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    navigate('/login');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign Up
        </Button>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
