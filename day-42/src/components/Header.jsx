import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <img src={logo} alt="" className="h-30" />
            <ul className="flex gap-4 *:*:text-xl *:*:[&.active]:font-bold">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </header>
    );
};

export default Header;