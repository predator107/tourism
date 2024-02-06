import { Link } from "react-router-dom";
import './App.css'

const Navbar = () => {
    return ( 
        <nav className="navbar flex justify-between items-center">

            <div className="title">
                <h1>Tourism</h1>
            </div>
            <div className="font-semibold">
                <Link to="/">Home</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/attractions">Attractions</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        
        </nav>
     );
}
 
export default Navbar;