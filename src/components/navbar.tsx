import { NavLink } from "react-router-dom"
import { useState } from "react";

function NavBar() {
    const [mobile, setMobile] = useState(false);
    function openMobile() {
        setMobile(!mobile);
    };
    return (
        <>
            <nav className="sticky top-0 flex justify-between items-center py-[30px] px-[70px] bg-[#262626] z-50 
            shadow-xs md:flex-row ">
                <NavLink to="/" className="uppercase no-underline text-[25px] text-white hover:text-orange-400 hover:duration-700">
                    CryptoMarket
                </NavLink>
                <ul className="flex justify-between items-center md:hidden md:flex-row">
                    <li className="list">
                        <NavLink to="/" className="uppercase no-underline text-white
                        hover:text-orange-400 hover:duration-700 md:my-[5px]">Home</NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/market" className="uppercase no-underline text-white
                        hover:text-orange-400 hover:duration-700">Market</NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/chooseus" className="uppercase no-underline text-white
                        hover:text-orange-400 hover:duration-700">Choose Us</NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/joinus" className="uppercase no-underline text-white
                        hover:text-orange-400 hover:duration-700">Join Us</NavLink>
                    </li>
                </ul>
                <div className="flex justify-center items-center">
                    <button type="submit" className="my-0 mx-2 p-1 font-sans font-bold md:hidden 
                    text-blue-700 border-solid border-blue-700 border-[1px] bg-white hover:text-white 
                    hover:border-white hover:bg-blue-700">Login</button>
                    <button type="submit" className="my-0 mx-2 p-1 font-sans font-bold md:hidden 
                    text-white border-white border-[1px] border-solid bg-green-700 hover:bg-[#03ce03]">Sign Up</button>
                </div>
                <span onClick={openMobile}>
                        <img src="./images/menu-burger.png" alt="menu-burger" className="hidden max-w-[2.7rem] cursor-pointer 
                        invert md:flex hover:scale-125 duration-300 ease-in-out" />
                </span>
            </nav>
            {/* // mobile's nav */}
            <div className={`flex flex-col fixed top-0 -left-full w-full h-screen z-50 bg-white text-[3rem] text-center items-center
            justify-center duration-[400ms] ease-in-out ${mobile ? "left-0" : ""}`}>
                <img onClick={openMobile} className="absolute max-w-[2.7rem] top-8 right-16 
                hover:scale-125 duration-300 ease-in-out cursor-pointer"  src="./images/cross.png"/>
                <ul className="flex flex-col gap-10">
                    <li onClick={openMobile} className="list-none">
                        <a href="/" className="no-underline duration-500 text-black hover:text-orange-400">Home</a>
                    </li>
                    <li onClick={openMobile} className="list-none">
                        <a href="/market" className="no-underline duration-500 text-black hover:text-orange-400">Market</a>
                    </li>
                    <li onClick={openMobile} className="list-none">
                        <a href="/chooseus" className="no-underline duration-500 text-black hover:text-orange-400">Choose Us</a>
                    </li>
                    <li onClick={openMobile} className="list-none">
                        <a href="/joinus" className="no-underline duration-500 text-black hover:text-orange-400">Join Us</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar