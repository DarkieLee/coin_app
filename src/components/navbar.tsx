import { NavLink } from "react-router-dom"
import "../styles/navbar_styles.css"
import { useState } from "react";

function NavBar() {
    const [mobile, setMobile] = useState(false);
    function openMobile() {
        setMobile(!mobile);
    };
    return (
        <>
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
                <span onClick={openMobile}>
                        <img src="./images/menu-burger.png" alt="menu-burger" className="hamburger-menu" />
                </span>
            </nav>
            {/* // mobile's nav */}
            <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
                <img onClick={openMobile} className="close-mobile"  src="./images/cross.png"/>
                <ul>
                    <li onClick={openMobile}>
                        <a href="/">Home</a>
                    </li>
                    <li onClick={openMobile}>
                        <a href="/market">Market</a>
                    </li>
                    <li onClick={openMobile}>
                        <a href="/chooseus">Choose Us</a>
                    </li>
                    <li onClick={openMobile}>
                        <a href="/joinus">Join Us</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar