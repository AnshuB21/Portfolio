import aboutSvg from "../assets/about.svg";
import Profile from "../assets/Profile.jpeg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid gap-16 md:grid-cols-[30%_60%] items-center text-center md:text-left">
        {/* Profile Image */}
        <img
          src={Profile}
          className="h-64 rounded mx-auto md:mx-0"
          alt="Profile"
        />

        {/* Article Section */}
        <article>
          <SectionTitle text="About" />
          <p className="text-slate-600 mt-8 leading-loose">
            <span className="text-blue-500">Graduate Computer Science</span>{" "}
            student thrives on exploring new concepts and technologies, and
            constantly seeks opportunities to expand skills and knowledge.
            Experienced in{" "}
            <span className="text-blue-500">software development</span> using
            Java and JavaScript, along with their libraries and frameworks.
            Currently serving as a{" "}
            <span className="text-blue-500">Graduate Teaching Assistant,</span>{" "}
            supporting undergraduate students with lab tasks, grading reports,
            and fostering a collaborative learning environment. Beyond
            programming and development, I enjoy creating engaging content for
            social platforms and immersing myself in fantasy literature. Always
            eager to explore innovative solutions and connect with like-minded
            professionals.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
