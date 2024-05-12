import Wahran from "../../assets/Lions.jpg";
import "./History.css";
function History() {
  return (
    <div className="history">
      <div className="his_box">
        <h4>Etymology</h4>
        <p>
          The name Wahran comes from the Berber term 'wa-iharan,' signifying
          'place of lions.' Legend has it that Barbary lions once roamed the
          area, meeting their end on a nearby mountain, later known as 'The
          Mountain of Lions.' This legend is commemorated by two lion statues at
          Oran's city hall, symbolizing the city's historic ties.
        </p>
        <button type="button">KNOW MORE</button>
      </div>
      <div className="img_bx">
        <img src={Wahran} alt="Wahran" />
      </div>
    </div>
  );
}
export default History;
