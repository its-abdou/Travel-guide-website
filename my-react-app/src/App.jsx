import Navbar from "./Pages/Components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Header from "./Pages/Home/Header.jsx";
import HotelPage from "./Pages/Services/Hotels/HotelPage.jsx";
import RestaurantsList from "./Pages/Services/Restaurents/RestaurantsList.jsx";
import MonumentsPage from "./Pages/Attraction/Monuments/MonumemtsPage.jsx";
import MallsPage from "./Pages/Attraction/Malls/MallsPage.jsx";
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
        <Route path="/attraction/monuments" element={<MonumentsPage />} />
        <Route path="/attraction/malls" element={<MallsPage />} />
        <Route path="/Login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
