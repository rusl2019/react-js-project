import React from "react";
import { Container, Button } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Homepage() {
  return (
    <>
      <NavbarComponent />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="image-container">
            <img
              src="/images/banner_1.png"
              className="img-fluid w-100"
              style={{ opacity: 0.5 }}
              alt="Banner 1"
            />
            <div className="text-overlay">
              <div className="col-12 col-md-6">
                <h1>Duty After School</h1>
                <p className="text-truncate">
                  Sebuah benda tak dikenal mengambil alih dunia. Dalam
                  keputusasaan, Departemen Pertahanan mulai merekrut lebih
                  banyak tentara, termasuk siswa sekolah menengah. Mereka pun
                  segera menjadi pejuang garis depan dalam perang.
                </p>
              </div>
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex align-items-center">
                  <Button variant="primary" className="me-2">
                    Mulai
                  </Button>
                  <Button variant="secondary">Selengkapnya</Button>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    18+
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "10px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <i className="fas fa-volume-mute"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Homepage;
