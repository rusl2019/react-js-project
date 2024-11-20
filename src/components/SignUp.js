import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "agreeToTerms" ? checked : value,
    }));
  };

  const validateForm = () => {
    // Reset error
    setError("");

    // Validasi nama
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("Nama depan dan belakang harus diisi");
      return false;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid");
      return false;
    }

    // Validasi password
    if (formData.password.length < 8) {
      setError("Password harus minimal 8 karakter");
      return false;
    }

    // Validasi konfirmasi password
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return false;
    }

    // Validasi persetujuan terms
    if (!formData.agreeToTerms) {
      setError("Anda harus menyetujui syarat dan ketentuan");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Simulasi API call untuk registrasi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Di sini Anda akan menambahkan logika untuk mengirim data ke backend
      console.log("Form submitted:", formData);

      // Simulasi sukses registrasi
      localStorage.setItem("token", "dummy-token");

      // Redirect ke dashboard
      navigate("/signin");
    } catch (err) {
      setError("Gagal mendaftar. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Card
          bg="dark"
          text="white"
          style={{
            "--bs-bg-opacity": "0.9",
          }}
        >
          <Card.Body>
            <div className="text-center mb-4">
              <img
                src="/images/Logo.png"
                alt="Logo"
                style={{ width: "40%", height: "auto" }}
              />
            </div>
            <h2 className="text-center">Daftar</h2>
            <p className="text-center small mb-4">Selamat datang!</p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Masukkan username"
                  required
                  className="bg-dark text-white"
                  style={{
                    border: "1px solid #6c757d",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Kata Sandi</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Masukkan kata sandi"
                  required
                  className="bg-dark text-white"
                  style={{
                    border: "1px solid #6c757d",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formConfirmPassword">
                <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Masukkan kata sandi"
                  required
                  className="bg-dark text-white"
                  style={{
                    border: "1px solid #6c757d",
                  }}
                />
              </Form.Group>

              <Row className="mb-3">
                <Col>
                  <div className="text-start small">
                    Sudah punya akun?{" "}
                    <Link to="/signin" className="text-info">
                      Masuk
                    </Link>
                  </div>
                </Col>
              </Row>

              <Button
                className="w-100"
                variant="secondary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Daftar"}
              </Button>

              <div
                className="text-center mt-2 text-sm mb-3"
                style={{ color: "#6c757d" }}
              >
                Atau
              </div>

              <Button
                className="w-100 text-white"
                variant="outline-secondary"
                type="submit"
                disabled={loading}
              >
                <FcGoogle className="me-2" size={20} />
                {loading ? "Loading..." : "Daftar dengan Google"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default SignUp;
