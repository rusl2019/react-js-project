// App.js
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import bgImage from "./assets/bg-image.jpg";

// Komponen wrapper untuk mengatur background
const BackgroundWrapper = ({ children }) => {
  const location = useLocation();

  // Tentukan apakah background image perlu diterapkan
  const shouldApplyBackground =
    location.pathname === "/signin" || location.pathname === "/signup";

  const wrapperStyle = shouldApplyBackground
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Pastikan full height
      }
    : {};

  return <div style={wrapperStyle}>{children}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <BackgroundWrapper>
        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Navigate to="/signin" />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BackgroundWrapper>
    </BrowserRouter>
  );
}

export default App;
