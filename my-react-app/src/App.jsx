import Navbar from "./Pages/Components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Header from "./Pages/Home/Header.jsx";
import HotelPage from "./Pages/Services/Hotels/HotelPage.jsx";
import RestaurantsList from "./Pages/Services/Restaurents/RestaurantsList.jsx";
import AttractionsPage from "./Pages/Attraction/AttractionsPage.jsx";
import Loginpage from "./Pages/Login/Loginpage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/" component={<Header />} />
        <Route path="/Services/Hotels" element={<HotelPage />} />
        <Route path="/Services/Restaurents" element={<RestaurantsList />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/Login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
