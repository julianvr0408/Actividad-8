import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container py-3">
      <div className="row align-items-center">
        <div className="col">
          <Link to="/">
            <img
              src="https://th.bing.com/th/id/OIP.JoTau08BSEDi3Qfi701hgwHaE8?rs=1&pid=ImgDetMain"
              alt="The Simpsons"
              width={180}
            />
          </Link>
        </div>
        <div className="col">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Family" className="nav-link">
                Family
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/History" className="nav-link">
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
