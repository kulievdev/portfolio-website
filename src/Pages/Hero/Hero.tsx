import profilePic from "../../assets/myImageSquare.png";
import linkedinPic from "../../assets/linkedin.png";
import githubPic from "../../assets/github.png";
import twitterPic from "../../assets/twitter.png";

const Hero = () => {
    return (
        <main className="bg-gradient-to-tl from-primary-100 to-gray-50">
            <section className=" flex justify-center gap-20 h-dvh ">
                <div className="flex relative h-[400px] w-[400px] my-auto mx-0 ">
                    <img
                        className="relative rounded-3xl z-10"
                        src={profilePic}
                        alt="Tohir Kuliev profile picture"
                    />
                    <div className="absolute bg-secondary-200 top-5 left-4 h-[400px] w-[350px] rounded-3xl"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <p className="font-semibold text-center">Hello, I'm</p>
                    <h1 className="font-semibold text-5xl text-center">
                        Tohir Kuliev
                    </h1>
                    <p className="font-semibold text-3xl mb-4">
                        Full Stack Web Developer
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="btn border-2 border-gray-700  hover:bg-gray-700 hover:text-white ">
                            Download CV
                        </button>
                        <button className="btn border-2 border-gray-700 bg-gray-700 text-white hover:bg-black">
                            Contact Info
                        </button>
                    </div>
                    <div className="flex justify-center mt-4 gap-4">
                        <img
                            src={linkedinPic}
                            alt="My LinkedIn profile"
                            className="icon"
                        />
                        <img
                            src={githubPic}
                            alt="My Github profile"
                            className="icon"
                        />
                        <img
                            src={twitterPic}
                            alt="My Twitter profile"
                            className="icon"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
