import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <Link to='/register' className="bg-[#E8788C] text-white py-1 px-3 rounded-sm" >Register</Link>
        <Link to='/login' className="bg-[#E8788C] text-white py-1 px-3 rounded-sm" >Login</Link>
    </>
    return (
        <div className="w-full flex justify-center">
            <div className="navbar bg-base-100 justify-between max-w-[1320px] mx-auto px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="p-1 sm:hidden">
                            <p className="text-2xl text-[#E8788C]"><RiMenuFill /></p>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-base w-max dropdown-content gap-5 bg-base-100 rounded-box z-[1] mt-3 p-4 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="font-inter font-bold text-[#E8788C] lg:ml-0 ml-3 cursor-pointer text-3xl">BrowseBox</Link>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal gap-5 font-inter items-center text-lg px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;