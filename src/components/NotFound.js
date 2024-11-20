import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h1>404</h1>
      <h3>Halaman Tidak Ditemukan</h3>
      <Button variant="primary" onClick={() => navigate("/")}>
        Kembali ke Beranda
      </Button>
    </Container>
  );
}

export default NotFound;
