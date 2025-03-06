import { Link } from "react-router-dom";
import '../css/NavBar.css'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="nav-link" to="/">Movie App</Link>
                <Link className="nav-link" to="/favorites">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar