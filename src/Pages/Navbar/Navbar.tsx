import DesktopNavbar from "./DesktopNavbar";
import HamburgerNavbar from "./HamburgerNavbar";

const Navbar = () => {
    return (
        <div className="bg-gradient-to-t from-gray-50 to-gray-100 border-b shadow-sm">
            <DesktopNavbar />
            <HamburgerNavbar />
        </div>
    );
};

export default Navbar;
