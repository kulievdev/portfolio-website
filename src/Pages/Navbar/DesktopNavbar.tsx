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
    <section className="mx-40 my-0">
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
        <a className="cursor-pointer rounded-xl border-2 border-secondary-300 px-6 py-2 text-center text-base font-bold leading-loose tracking-wider text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:text-primary-700 tablet:px-5 tablet:py-2.5 tablet:text-lg desktop:text-xl">
          Connect
        </a>
      </nav>
    </section>
  );
};

export default DesktopNavbar;
