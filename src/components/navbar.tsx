import { NavLink } from "react-router-dom"
import "../styles/navbar_styles.css"
function NavBar() {
    return (
        <nav className="nav-bar">
            <NavLink to="/" className="logo">
                CryptoMarket
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/market">Market</NavLink>
                </li>
                <li>
                    <NavLink to="/chooseus">Choose Us</NavLink>
                </li>
                <li>
                    <NavLink to="/joinus">Join Us</NavLink>
                </li>
            </ul>
            <div className="submit-buttons">
                <button type="submit" className="login-btn">Login</button>
                <button type="submit" className="sign-up-btn">Sign Up</button>
            </div>
        </nav>
    )
}

export default NavBar