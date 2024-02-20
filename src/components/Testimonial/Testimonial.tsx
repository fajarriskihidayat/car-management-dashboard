import "./style.css";

import UserImg from "../../assets/img_photo.png";
import RateImg from "../../assets/Rate.png";
import ArrowLeft from "../../assets/fi_chevron-left.png";
import ArrowRight from "../../assets/fi_chevron-right.png";

const Testimonial = () => {
  return (
    <section id="testimonial" className="text-center">
      <h1>Testimonial</h1>
      <span>Berbagai review positif dari para pelanggan kami</span>
      <div className="card d-flex flex-row gap-4 border-0">
        <div className="card-item shadow-sm">
          <img
            src={UserImg}
            alt="testi"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="text-start ms-5">
            <img src={RateImg} alt="rate" />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <span>John Dee 32, Bromo</span>
          </div>
        </div>
        <div className="card-item shadow-sm">
          <img
            src={UserImg}
            alt="testi"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="text-start ms-5">
            <img src={RateImg} alt="rate" />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <span>John Dee 32, Bromo</span>
          </div>
        </div>
        <div className="card-item shadow-sm">
          <img
            src="https://i.ibb.co/QPSm7q1/img-photo.png"
            alt="testi"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="text-start ms-5">
            <img src={RateImg} alt="rate" />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <span>John Dee 32, Bromo</span>
          </div>
        </div>
      </div>
      <div
        className="arrow d-flex flex-row justify-content-center gap-4"
        style={{ marginTop: "30px" }}
      >
        <div className="bg prev">
          <img src={ArrowLeft} alt="prev" />
        </div>
        <div className="bg next">
          <img src={ArrowRight} alt="next" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
