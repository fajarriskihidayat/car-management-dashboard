import "./style.css";

import FacebookImg from "../../assets/icon_facebook.png";
import InstagrmImg from "../../assets/icon_instagram.png";
import TwiiterImg from "../../assets/icon_twitter.png";
import MailImg from "../../assets/icon_mail.png";
import TwitchImg from "../../assets/icon_twitch.png";

const Footer = () => {
  return (
    <footer
      className="containerr d-flex flex-row"
      style={{ marginBottom: "100px", gap: "86px" }}
    >
      <div style={{ width: "268px" }}>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="d-flex flex-column gap-3">
        <a href="#">Our services</a>
        <a href="#">Why Us</a>
        <a href="#">Testimonial</a>
        <a href="#">FAQ</a>
      </div>
      <div>
        <p>Connect with us</p>
        <div className="d-flex gap-3">
          <img src={FacebookImg} alt="fb" />
          <img src={InstagrmImg} alt="ig" />
          <img src={TwiiterImg} alt="twitter" />
          <img src={MailImg} alt="email" />
          <img src={TwitchImg} alt="twitch" />
        </div>
      </div>
      <div>
        <p>Copyright Binar 2022</p>
        <div className="box"></div>
      </div>
    </footer>
  );
};

export default Footer;
