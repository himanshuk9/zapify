import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing! Your details have been saved.");
        setFormData({ name: "", email: "" });
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="fw-bold">
              By Subscribing To Our Newsletter You Can Get 30% Off
            </h2>
            <p className="text-muted">
              Details to details is what makes Hexashop different from the other themes.
            </p>
            <form onSubmit={handleSubmit} className="d-flex align-items-center">
              <div className="me-2">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="me-2">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark">
                <i className="fa-solid fa-paper-plane fa-lg"></i> {/* Send Icon */}
              </button>
            </form>
            {message && <p className="mt-3 text-success">{message}</p>}
                  </div>
                      <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 mb-3">
                <h6 className="fw-bold">
                  <i className="fa-solid fa-location-dot me-2"></i>Store Location:
                </h6>
                <p className="text-muted">
                  Sunny Isles Beach, FL 33160, United States
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <h6 className="fw-bold">
                  <i className="fa-solid fa-clock me-2"></i>Work Hours:
                </h6>
                <p className="text-muted">07:30 AM - 9:30 PM Daily</p>
              </div>
              <div className="col-md-6 mb-3">
                <h6 className="fw-bold">
                  <i className="fa-solid fa-phone me-2"></i>Phone:
                </h6>
                <a href="tel:0100200340" className="text-muted">
                  010-020-0340
                </a>
              </div>
              <div className="col-md-6 mb-3">
                <h6 className="fw-bold">
                  <i className="fa-solid fa-envelope me-2"></i>Email:
                </h6>
                <a href="mailto:mail@domain.com" className="text-muted">
                  mail@domain.com
                </a>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold">
                  <i className="fa-solid fa-building me-2"></i>Office Location:
                </h6>
                <p className="text-muted">North Miami Beach</p>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold">
                  <i className="fa-solid fa-share-nodes me-2"></i>Social Media:
                </h6>
                <p className="text-muted d-flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted"
                  >
                    <i className="fa-brands fa-facebook fa-lg"></i> {/* Facebook Icon */}
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted"
                  >
                    <i className="fa-brands fa-instagram fa-lg"></i> {/* Instagram Icon */}
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted"
                  >
                    <i className="fa-brands fa-behance fa-lg"></i> {/* Behance Icon */}
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted"
                  >
                    <i className="fa-brands fa-linkedin fa-lg"></i> {/* LinkedIn Icon */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
