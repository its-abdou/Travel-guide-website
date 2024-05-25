// import  Monumemt  from "../../Components/Monument.jsx";
import PalaisBey from "../../Components/PalaisBey.jsx";
import "./MonumentsPage.css";
import Footer from "../../Components/Footer.jsx";

function MonumemtsPage() {
  return (
    <div>
      <div className="Monuments">
      <div className="title">
        <h1>Palais du Bey</h1>
      </div>  
      {/* <Monumemt></Monumemt> */}
      <PalaisBey></PalaisBey>
    </div>
    <Footer></Footer>
  </div>  
  );
}
export default MonumemtsPage;