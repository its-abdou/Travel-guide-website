import Home from "./Pages/Home/Home.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import HistoryPage from "./Pages/History/HistoryPage.jsx";
import Header from "./Pages/Home/Header.jsx";
import Navbar from "./Pages/Components/Navbar.jsx";
import MonumentsPage from "./Pages/Attraction/Monuments/MonumemtsPage.jsx";
import Loginpage from "./Pages/Login/Loginpage.jsx";
import HotelsList from "./Pages/Hotels/HotelsList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route exact path="/" component={<Header />} />
        <Route path="/attraction/monuments" element={<MonumentsPage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/hotels" element={<HotelsList />} />
      </Routes>
    </>
  );
}

export default App;
