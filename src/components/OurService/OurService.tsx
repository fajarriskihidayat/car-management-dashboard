import "./style.css";

import ImgService from "../../assets/img_service.png";
import Checklist from "../../assets/checklist.png";

const OurService = () => {
  return (
    <section
      id="our-services"
      className="containerr d-flex align-items-center justify-content-around"
    >
      <div className="left">
        <img src={ImgService} alt="Our Services" />
      </div>
      <div className="right">
        <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div>
          <div className="list">
            <img src={Checklist} alt="Check" />
            <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
          </div>
          <div className="list">
            <img src={Checklist} alt="Check" />
            <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
          </div>
          <div className="list">
            <img src={Checklist} alt="Check" />
            <span>Sewa Mobil Jangka Panjang Bulanan</span>
          </div>
          <div className="list">
            <img src={Checklist} alt="Check" />
            <span>Gratis Antar - Jemput Mobil di Bandara</span>
          </div>
          <div className="list">
            <img src={Checklist} alt="Check" />
            <span>Layanan Airport Transfer / Drop In Out</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
