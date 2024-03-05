import DesktopNavbar from "./DesktopNavbar";
import HamburgerNavbar from "./HamburgerNavbar";

const Navbar = () => {
    return (
        <div className="bg-gradient-to-tl from-secondary-100 border-2 ">
            <DesktopNavbar />
            <HamburgerNavbar />
        </div>
    );
};

export default Navbar;
