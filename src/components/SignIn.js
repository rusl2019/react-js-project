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
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "rememberMe" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Username dan password harus diisi");
      return;
    }

    try {
      setError("");
      setLoading(true);

      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simpan token (dalam kasus nyata, ini akan didapat dari response API)
      localStorage.setItem("token", "dummy-token");

      // Redirect ke dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Gagal masuk. Silakan coba lagi.");
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
            <h2 className="text-center">Masuk</h2>
            <p className="text-center small mb-4">Selamat datang kembali!</p>

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

              <Form.Group className="mb-1" controlId="formPassword">
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

              <Row className="mb-3">
                <Col>
                  <div className="text-start small">
                    Belum punya akun?{" "}
                    <a href="/signup" className="text-info">
                      Daftar
                    </a>
                  </div>
                </Col>
                <Col>
                  <div className="text-end small">
                    <a href="/forgot-password" className="text-info">
                      Lupa kata sandi?
                    </a>
                  </div>
                </Col>
              </Row>

              <Button
                className="w-100"
                variant="secondary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Masuk"}
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
                {loading ? "Loading..." : "Masuk dengan Google"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default SignIn;
