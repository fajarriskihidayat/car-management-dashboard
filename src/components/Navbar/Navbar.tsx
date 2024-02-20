import "./style.css";

const Navbar = () => {
  return (
    <header style={{ backgroundColor: "#f1f3ff" }}>
      <div className="containerr p-0">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="box"></div>
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <button className="btn text-light">Register</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
