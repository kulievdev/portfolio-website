import { myLinks } from "./DesktopNavbar";

const HamburgerNavbar = () => {
    return (
        <nav className="hidden">
            <div className="logo">John Doe</div>
            <div className="relative inline-block">
                <div className="flex flex-col justify-between h-[24px] w-[30px] cursor-pointer">
                    <span className="transform-none opacity-[1] open: rotate-45 translate-x-[10px] translate-y-[5px]"></span>
                    <span className="open: opacity-0"></span>
                    <span className="open: rotate-[-45deg] translate-x-[10px] translate-y-[-5px]"></span>
                </div>
                <div className="absolute top-[100%] right-0 bg-white w-fit max-h-0 overflow-hidden transition duration-[0.3] ease-in-out open:max-h-[300px]">
                    {myLinks.map((myLink, idx) => {
                        return (
                            <li key={idx}>
                                <a
                                    className="block p-[10px] text-center text-2xl text-black transition duration-[0.3] ease-in-out"
                                    href={myLink.link}
                                >
                                    {myLink.text}
                                </a>
                            </li>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default HamburgerNavbar;
