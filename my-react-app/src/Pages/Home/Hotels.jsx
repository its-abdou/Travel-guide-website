import Meridien from "../../assets/merdien.webp";
import FourPoints from "../../assets/FourPoints.webp";
import Royal from "../../assets/Royal.webp";
import Rodina from "../../assets/Rodina.webp";
import "./Hotels.css";
function Hotels() {
  return (
    <div className="hotels">
      <h1>Discover Top Hotels</h1>
      <p>Find Your Perfect Stay</p>
      <div className="cards">
        <div className="card">
          <h3>Le Meridien</h3>
          <div className="img_hotel">
            <img src={Meridien} alt="Le Meridien" />
            <h4>
              Includes : luxurious spa, gourmet dining, and rooftop pool access
            </h4>
          </div>
          <div className="cont_bx">
            <div className="price">
              <div className="heart_chat">
                <i className="bi bi-heart-fill">
                  <span>86415</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>4586</span>
                </i>
              </div>
              <div className="info_price">
                <a href="">More Info</a>
                <h4>DZD 25 800</h4>
              </div>
            </div>
            <div className="dayes">
              1<br />
              Night
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Four Points</h3>
          <div className="img_hotel">
            <img src={FourPoints} alt="Le Meridien" />
            <h4>
              Includes : luxurious spa, gourmet dining, and rooftop pool access
            </h4>
          </div>
          <div className="cont_bx">
            <div className="price">
              <div className="heart_chat">
                <i className="bi bi-heart-fill">
                  <span>86415</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>4586</span>
                </i>
              </div>
              <div className="info_price">
                <a href="">More Info</a>
                <h4>DZD 22 000</h4>
              </div>
            </div>
            <div className="dayes">
              1<br />
              Night
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Royal Hotel</h3>
          <div className="img_hotel">
            <img src={Royal} alt="Le Meridien" />
            <h4>
              Includes : luxurious spa, gourmet dining, and rooftop pool access
            </h4>
          </div>
          <div className="cont_bx">
            <div className="price">
              <div className="heart_chat">
                <i className="bi bi-heart-fill">
                  <span>86415</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>4586</span>
                </i>
              </div>
              <div className="info_price">
                <a href="">More Info</a>
                <h4>DZD 26 000</h4>
              </div>
            </div>
            <div className="dayes">
              1<br />
              Night
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Rodina Hotel</h3>
          <div className="img_hotel">
            <img src={Rodina} alt="Le Meridien" />
            <h4>
              Includes : luxurious spa, gourmet dining, and rooftop pool access
            </h4>
          </div>
          <div className="cont_bx">
            <div className="price">
              <div className="heart_chat">
                <i className="bi bi-heart-fill">
                  <span>86415</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>4586</span>
                </i>
              </div>
              <div className="info_price">
                <a href="">More Info</a>
                <h4>DZD 21 762</h4>
              </div>
            </div>
            <div className="dayes">
              1<br />
              Night
            </div>
          </div>
        </div>
      </div>
      <input type="button" value="Explore more" />
    </div>
  );
}
export default Hotels;
