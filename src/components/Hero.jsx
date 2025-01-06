import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="bg-blue-50 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-wider">
            Hi, I'm Anshu
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full Stack Software Engineer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-black-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-blue-700 hover:text-black duration-300" />
            </a>
            <a href="#">
              <PiReadCvLogoFill className="h-8 w-8 text-blue-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
