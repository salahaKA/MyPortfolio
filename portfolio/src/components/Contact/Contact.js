import React, { useState } from "react";
import "../Contact/Contacts.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = (values) => {
    let formErrors = {};

    if (!values.name.trim()) formErrors.name = "Name is required";
    if (!emailPattern.test(values.email)) formErrors.email = "Valid email required";
    if (!values.subject.trim()) formErrors.subject = "Subject is required";

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValues = { ...formValues, [name]: value };
    setFormValues(updatedValues);

    if (touched[name]) {
      setErrors(validateForm(updatedValues));
    }

    setSuccessMessage("");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    const updatedErrors = validateForm(formValues);
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(formValues);
    setErrors(formErrors);
    setTouched({ name: true, email: true, subject: true });

    if (Object.keys(formErrors).length === 0) {
      setSuccessMessage("Form submitted successfully!");
      setFormValues({ name: "", email: "", subject: "" });
      setTouched({});
    }
  };

  return (
    <Container className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <Form className="contact-form" onSubmit={handleSubmit} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
              />
              {touched.name && <div className="error-text">{errors.name}</div>}
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
                onBlur={handleBlur}
                isInvalid={touched.email && !!errors.email}
              />
              {touched.email && <div className="error-text">{errors.email}</div>}
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
            onBlur={handleBlur}
            isInvalid={touched.subject && !!errors.subject}
          />
          {touched.subject && <div className="error-text">{errors.subject}</div>}
        </Form.Group>

        {successMessage && <div className="success-text">{successMessage}</div>}

        <Row className="mt-3">
          <Col md={6}>
            <Button type="submit" variant="primary" className="contact-button w-100">
              SEND Message
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="primary"
              className="contact-button w-100"
              onClick={() => {
                setFormValues({ name: "", email: "", subject: "" });
                setErrors({});
                setTouched({});
                setSuccessMessage("");
              }}
            >
              CLEAR
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Contact;
