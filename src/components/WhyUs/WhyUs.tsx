import "./style.css";

import IconCompleted from "../../assets/icon_complete.png";
import IconPrice from "../../assets/icon_price.png";
import Icon24hrs from "../../assets/icon_24hrs.png";
import IconProfesional from "../../assets/icon_professional.png";

const WhyUs = () => {
  return (
    <section id="why-us" className="containerr">
      <h1 className="title">Why Us?</h1>
      <span>Mengapa harus pilih Binar Car Rental?</span>
      <div className="row">
        <div className="col">
          <div className="card p-4">
            <img src={IconCompleted} alt="" />
            <h2>Mobil Lengkap</h2>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card p-4">
            <img src={IconPrice} alt="" />
            <h2>Harga Murah</h2>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card p-4">
            <img src={Icon24hrs} alt="" />
            <h2>Layanan 24 Jam</h2>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card p-4">
            <img src={IconProfesional} alt="" />
            <h1>Sopir Profesional</h1>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
