import Home from "./Pages/Home/Home.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import HistoryPage from "./Pages/History/HistoryPage.jsx";
import Navbar from "./Pages/Components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
