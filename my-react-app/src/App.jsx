import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import HotelPage from "./Pages/Services/Hotels/HotelPage.jsx";
import RestaurantsList from "./Pages/Services/Restaurents/RestaurantsList.jsx";
import OsPage from "./Pages/Services/OtherSerrvices/OsPage.jsx";
import AttractionsPage from "./Pages/Attraction/AttractionsPage.jsx";
import Navbar from "./Pages/Components/Navbar.jsx";
import Log from "./Pages/Authentication/Log.jsx";
import Register from "./Pages/Authentication/Register.jsx";
import Profile from "./Pages/Authentication/Profile.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    // Check if the user is already authenticated (e.g., from a session or token)
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost/backend/profile.php",
          {
            withCredentials: true,
          }
        );
        if (response.data.username) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services/Hotels" element={<HotelPage />} />
        <Route path="/Services/Restaurents" element={<RestaurantsList />} />
        <Route path="/Services/Otherservices" element={<OsPage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/login" element={<Log setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile setAuth={setAuth} />
            ) : (
              <Log setAuth={setAuth} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
