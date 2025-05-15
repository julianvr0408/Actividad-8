import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col">
                <Link><img src="https://th.bing.com/th/id/OIP.JoTau08BSEDi3Qfi701hgwHaE8?rs=1&pid=ImgDetMain"
                alt="the simpsons" width={180} /></Link>
            </div>


            <div className="col">
                <ul>
                    <li class="nav-item">
                        <Link to="/" class= "nav-link active" aria-current="page">Home</Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/Family" class="nav-link">Family</Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/History" class="nav-link">History</Link>
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}
export default Header
