import { Link } from "react-router-dom";
import { logo } from "@/assets";

const Navbar = () => {

    return (
        <nav
            className='absolute lg:px-16 px-6 w-full flex items-center h-[60px]  z-10'
        >
            <div className="w-full flex sm:justify-between justify-center items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[4rem] h-[4rem] object-contain"
                    />
                    <p className="sm:hidden block text-zinc-300 text-[16px] font-bold cursor-pointer">
                        Yosef Hershberg
                    </p>
                </Link>
                <p className="text-zinc-300 text-[18px] font-bold cursor-pointer sm:flex hidden absolute left-1/2 transform -translate-x-1/2">
                    Yosef Hershberg &nbsp;
                    <span className="sm:block hidden">
                        | &nbsp; Full Stack Developer
                    </span>
                </p>
            </div>

        </nav>
    );
};

export default Navbar;