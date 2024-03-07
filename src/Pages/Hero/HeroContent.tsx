const HeroContent = () => {
    return (
        <div
            className="inline-flex max-w-[600px] flex-col items-start justify-center gap-6 pt-6 tablet:pt-4 desktop:gap-16 desktop:pt-0"
            role="banner"
        >
            <header className="flex flex-col items-start justify-start gap-4 desktop:gap-12">
                <p className="text-center text-4xl font-bold leading-10 tablet:text-5xl tablet:font-extrabold tablet:leading-[68px] desktop:text-start desktop:text-7xl desktop:leading-[84px]">
                    Hello, I'm Tohir a{" "}
                    <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent ">
                        Full Stack Web
                    </span>{" "}
                    <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent ">
                        Developer.
                    </span>{" "}
                </p>
                <p className="text-center text-lg font-medium leading-normal text-gray-600 tablet:text-xl desktop:text-start desktop:leading-7">
                    Presenting unique and creative software solutions for a
                    variety of challenges and needs.
                </p>
            </header>
            <nav className="inline-flex w-full items-start justify-center space-x-4 desktop:justify-start desktop:space-x-8">
                <a className="flex cursor-pointer items-center justify-center rounded-xl bg-primary-700 px-3 py-2.5 transition-colors duration-300 ease-out hover:bg-primary-600 tablet:px-5 tablet:py-3 desktop:rounded-desktop desktop:px-7 desktop:py-5">
                    <p className="text-center text-base font-bold leading-loose tracking-wider text-gray-50 tablet:text-lg desktop:text-xl">
                        Download CV
                    </p>
                </a>
                <a className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary-700 px-3 py-2 text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:text-primary-700  tablet:px-5 tablet:py-2.5 desktop:rounded-desktop desktop:px-7 desktop:py-[18px]">
                    <p className="text-center text-base font-bold leading-loose tracking-wider tablet:text-lg desktop:text-xl">
                        My Work
                    </p>
                </a>
            </nav>
        </div>
    );
};

export default HeroContent;
