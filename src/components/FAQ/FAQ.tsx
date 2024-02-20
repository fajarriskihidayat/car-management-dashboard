import "./style.css";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="containerr d-flex flex-row justify-content-between"
    >
      <div className="left">
        <h1>Frequently Asked Question</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div
        className="accordion d-flex gap-3 flex-column"
        id="accordionExample"
        style={{ width: "668px" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Berapa hari minimal sewa mobil lepas kunci?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              maiores quibusdam esse optio magni in laudantium. Voluptatum
              aspernatur animi fugit commodi rerum itaque. Aut, voluptatum ipsam
              tempora excepturi consectetur optio.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Berapa hari minimal sewa mobil lepas kunci?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              maiores quibusdam esse optio magni in laudantium. Voluptatum
              aspernatur animi fugit commodi rerum itaque. Aut, voluptatum ipsam
              tempora excepturi consectetur optio.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              sint itaque, quam esse dignissimos numquam culpa minima facere
              sequi quasi neque accusamus dolor accusantium hic nam blanditiis.
              Voluptatibus, consectetur laudantium.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Apakah Ada biaya antar-jemput?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              sint itaque, quam esse dignissimos numquam culpa minima facere
              sequi quasi neque accusamus dolor accusantium hic nam blanditiis.
              Voluptatibus, consectetur laudantium.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Bagaimana jika terjadi kecelakaan
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              sint itaque, quam esse dignissimos numquam culpa minima facere
              sequi quasi neque accusamus dolor accusantium hic nam blanditiis.
              Voluptatibus, consectetur laudantium.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
