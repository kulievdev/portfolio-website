import Logo from "../../Components/Logo";

export const myLinks = [
    {
        link: "#skills",
        text: "Skills"
    },
    {
        link: "#about",
        text: "About"
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
        <nav className="flex justify-around items-center py-6">
            <Logo />
            <div>
                <ul className="nav-links flex gap-8 text-xl">
                    {myLinks.map((myLink, idx) => {
                        return (
                            <li key={idx}>
                                <a href={myLink.link}>{myLink.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button className="py-2 px-6 text-lg font-semibold rounded-xl border-2 border-secondary-300  hover:bg-gray-700  hover:text-white ">
                Connect
            </button>
        </nav>
    );
};

export default DesktopNavbar;
