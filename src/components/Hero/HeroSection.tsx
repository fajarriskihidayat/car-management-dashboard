import "./style.css";
import { Link } from "react-router-dom";

import Car from "../../assets/img_car.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-between align-items-center"
    >
      <div className="left">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <Link to={"/cars"} className="btn text-light">
          Mulai Sewa Mobil
        </Link>
      </div>
      <div className="right">
        <img src={Car} alt="Car" />
      </div>
    </section>
  );
};

export default HeroSection;
