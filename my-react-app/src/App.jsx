import Home from "./Pages/Home/Home.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import HistoryPage from "./Pages/History/HistoryPage.jsx";
import Navbar from "./Pages/Components/Navbar.jsx";
import MonumentsPage from "./Pages/Attraction/Monuments/MonumemtsPage.jsx";
import Loginpage from "./Pages/Login/Loginpage.jsx";
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
        <Route path="/attraction/monuments" element={<MonumentsPage />}/>
        <Route path="/Login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
