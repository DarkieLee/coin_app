import { NavLink } from "react-router-dom"
import "../styles/styles.css"
function NavBar() {
    return (
        <nav>
            <NavLink to="/" className="logo">
                CoinMarket
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
                    <NavLink to="/joineus">Join Us</NavLink>
                </li>
            </ul>
            <div>
                <a href="https://discord.com/" target="_blank">
                    <img src="/images/discord.png" alt="discord" />
                </a>
                <a href="https://facebook.com/" target="_blank">
                    <img src="/images/facebook.png" alt="facebook" />
                </a>
                <a href="https://instagram.com/" target="_blank">
                    <img src="/images/instagram.png" alt="instagram" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <img src="/images/x-twitter.png" alt="x-twitter" />
                </a>
            </div>
        </nav>
    )
}

export default NavBar