import Cta from "../../Components/Cta";
import Logo from "../../Components/Logo";

export const myLinks = [
  {
    link: "#skills",
    text: "Skills",
  },
  {
    link: "#about",
    text: "About",
  },
  {
    link: "#projects",
    text: "Projects",
  },
  {
    link: "#contact",
    text: "Contact",
  },
];

const DesktopNavbar = () => {
  return (
    <div className="mx-40 my-0">
      <nav className="flex items-center justify-between py-6">
        <Logo />
        <div>
          <ul className="nav-links flex gap-8 text-xl">
            {myLinks.map((myLink, idx) => {
              return (
                <li key={idx}>
                  <a className="hover:nav_links" href={myLink.link}>
                    {myLink.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <Cta type="connect" />
      </nav>
    </div>
  );
};

export default DesktopNavbar;
