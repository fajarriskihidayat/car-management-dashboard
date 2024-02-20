import { Link } from "react-router-dom";
import "./style.css";

const Banner = () => {
  return (
    <section id="banner" className="banner containerr">
      <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link to={"/cars"} className="btn text-light">
        Mulai Sewa Mobil
      </Link>
    </section>
  );
};

export default Banner;
