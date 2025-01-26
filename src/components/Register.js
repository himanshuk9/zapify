import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      });
    }

    if (name === "name") {
      setErrors({
        ...errors,
        name: value.length <= 10 ? "" : "Name must be 10 characters or less",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submitting
    if (!formData.name || errors.name) {
      alert("Please enter a valid name");
      return;
    }
    if (!formData.email || errors.email) {
      alert("Please enter a valid email");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully");
        setFormData({ name: "", email: "", password: "" }); // Clear form
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Name (Max 10 characters)"
          value={formData.name}
          onChange={handleChange}
          required
          className="register-input"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="register-input"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="register-input"
        />
        <button type="submit" className="register-button">
          Register
        </button>
        <button type="button" onClick={handleClear} className="register-button">
          Clear Form
        </button>
        <button
          type="button"
          onClick={() => (window.location.href = "/")}
          className="register-button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Register;
