import React, { useState } from "react";
import "../styles/Contact.css";
import { Button, Grid, TextField, Typography } from "@mui/material";

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
        if (!emailPattern.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Please enter a valid email address.",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
        break;
      case "password":
        if (!strongPasswordRegex.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password:
              "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
        }
        break;
      default:
        if (value.trim() === "") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: `${
              name.charAt(0).toUpperCase() + name.slice(1)
            } is required.`,
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
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
    <div className="contact-container">
      <Typography variant="h4" className="contact-title">
        Contact Me
      </Typography>
      <form className="contact-form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              className="contact-input"
              value={formValues.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              className="contact-input"
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              className="contact-input"
              value={formValues.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              className="contact-input"
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="contact-button"
            >
              SEND Message
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              className="contact-button"
              onClick={handleClear}
            >
              CLEAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Contact;
