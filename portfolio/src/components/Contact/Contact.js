import React, { useState } from "react";
import "../Contact/Contacts.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    switch (name) {
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: emailPattern.test(value)
            ? ""
            : "Please enter a valid email address.",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: strongPasswordRegex.test(value)
            ? ""
            : "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.",
        }));
        break;
      default:
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: value.trim()
            ? ""
            : `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`,
        }));
        break;
    }
  };

  const handleClear = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      password: "",
    });
    setErrors({});
  };

  return (
    <Container className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <Form className="contact-form" noValidate>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mt-3">
          <Col md={6}>
            <Button variant="primary" className="contact-button w-100">
              SEND Message
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="primary"
              className="contact-button w-100"
              onClick={handleClear}
              
            >
              CLEAR
            </Button>
          </Col>
        </Row>

        {/* <Row className="mt-3">
          <Col md={6}>
            <Button variant="primary" className="contact-button" block>
              SEND Message
            </Button>
          </Col>
          <Col md={6}>
            <Button variant="outline-secondary" className="contact-button" onClick={handleClear} block>
              CLEAR
            </Button>
          </Col>
        </Row> */}
      </Form>
    </Container>
  );
}

export default Contact;
