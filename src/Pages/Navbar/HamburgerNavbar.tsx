import { myLinks } from "./DesktopNavbar";

const HamburgerNavbar = () => {
  return (
    <nav className="hidden">
      <div className="logo">John Doe</div>
      <div className="relative inline-block">
        <div className="flex h-[24px] w-[30px] cursor-pointer flex-col justify-between">
          <span className="open: translate-x-[10px] translate-y-[5px] rotate-45 transform-none opacity-[1]"></span>
          <span className="open: opacity-0"></span>
          <span className="open: translate-x-[10px] translate-y-[-5px] rotate-[-45deg]"></span>
        </div>
        <div className="absolute right-0 top-[100%] max-h-0 w-fit overflow-hidden bg-white transition duration-[0.3] ease-in-out open:max-h-[300px]">
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
