import Logo from "../../Components/Logo";

export const myLinks = [
    {
        link: "#about",
        text: "About"
    },
    {
        link: "#experience",
        text: "Experience"
    },
    {
        link: "#projects",
        text: "Projects"
    },
    {
        link: "#contact",
        text: "Contact"
    }
];

const DesktopNavbar = () => {
    return (
        <nav
            id="desktop-nav"
            className="flex justify-around items-center h-[17vh]"
        >
            <Logo />
            <div>
                <ul className="nav-links flex gap-8 text-2xl">
                    {myLinks.map((myLink, idx) => {
                        return (
                            <li key={idx}>
                                <a href={myLink.link}>{myLink.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default DesktopNavbar;
