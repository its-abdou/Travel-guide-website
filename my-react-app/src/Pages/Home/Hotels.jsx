import Meridien from "../../assets/merdien.webp";
import FourPoints from "../../assets/FourPoints.webp";
import Royal from "../../assets/Royal.webp";
import Rodina from "../../assets/Rodina.webp";
import "./Hotels.css";
import { Link } from "react-router-dom";

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
                <a
                  href="https://www.booking.com/hotel/dz/le-meridien-oran.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaECIAQGYAQm4AQfIAQ3YAQHoAQH4AQuIAgGoAgO4AvD9zLIGwAIB0gIkNDZiODA3ZWYtYmE5MS00NDY0LTkyZmQtY2E5OGJmYzgyMmU12AIG4AIB&sid=53ce9c26bba32cba8e171b25bb4a6828&aid=304142"
                  target="_blank"
                >
                  More Info
                </a>
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
                <a
                  href="https://www.booking.com/hotel/dz/four-points-by-sherton-oran.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaECIAQGYAQm4AQfIAQ3YAQHoAQH4AQuIAgGoAgO4AvD9zLIGwAIB0gIkNDZiODA3ZWYtYmE5MS00NDY0LTkyZmQtY2E5OGJmYzgyMmU12AIG4AIB&sid=53ce9c26bba32cba8e171b25bb4a6828&all_sr_blocks=147252009_87476807_0_42_0;checkin=2024-06-01;checkout=2024-06-15;dest_id=-480007;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=147252009_87476807_0_42_0;hpos=1;matching_block_id=147252009_87476807_0_42_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=147252009_87476807_0_42_0__26080000;srepoch=1716768024;srpvid=68050009f264003a;type=total;ucfs=1&#hotelTmpl"
                  target="_blank"
                >
                  More Info
                </a>
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
                <a
                  href="https://www.booking.com/hotel/dz/royal-oran-mgallery-by-sofitel.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaECIAQGYAQm4AQfIAQ3YAQHoAQH4AQuIAgGoAgO4AvD9zLIGwAIB0gIkNDZiODA3ZWYtYmE5MS00NDY0LTkyZmQtY2E5OGJmYzgyMmU12AIG4AIB&sid=53ce9c26bba32cba8e171b25bb4a6828&aid=304142"
                  target="_blank"
                >
                  More Info
                </a>
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
                <a
                  href="https://www.tripadvisor.fr/Hotel_Review-g303167-d20326578-Reviews-Rodina_Hotel_Spa_Conferences-Oran_Oran_Province.html"
                  target="_blank"
                >
                  More Info
                </a>
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
      <Link to="/Services/Hotels">
        <input type="button" value="Explore more" />
      </Link>
    </div>
  );
}
export default Hotels;
