import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [emptyFields, setEmptyFields] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // In the context of a form submission, the default behavior is typically to reload the page
    // and submit the form data to the server.
    // By calling event.preventDefault(), you are preventing this default behavior,
    // allowing you to handle the form submission as you see fit
    // (for example, sending an AJAX request instead of reloading the page).
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setEmptyFields(true);
      return;
    }

    setEmptyFields(false);

    fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to register user");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User registered successfully:", data);
        setShowForm(false);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return showForm ? (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {emptyFields && !formData.email && (
          <Form.Text className="text-danger">Email cannot be empty</Form.Text>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {emptyFields && !formData.password && (
          <Form.Text className="text-danger">
            Password cannot be empty
          </Form.Text>
        )}
      </Form.Group>
      <br />
      <Button type="submit">Register</Button>
    </Form>
  ) : (
    <div style={{ textAlign: "center" }}>
      <p>Registered successfully!</p>
    </div>
  );
};

export default Register;
