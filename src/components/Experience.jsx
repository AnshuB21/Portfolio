import { experience } from "../data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Experience = () => {
  return (
    <article
      className="grid grid-cols-1 sm:grid-cols-[30%_70%] gap-4 items-start"
      id="experience"
    >
      {/* Left Section: Heading */}
      <div className="font-bold text-5xl capitalize text-center">
        Experience
      </div>

      {/* Right Section: Timeline */}
      <section className="experience-section">
        {experience.map((item) => (
          <OneExperience key={item.id} {...item} />
        ))}
      </section>
    </article>
  );
};

const OneExperience = ({ title, date, company, location, description }) => {
  const [showInfo, setSHowInfo] = useState(false);
  return (
    <div className="experience-item">
      <div className="timeline-dot"></div>
      <article className="experience-card">
        <header>
          <h3 className="experience-title">{title}</h3>
          <h4 className="experience-company">{company}</h4>
          <p className="experience-date-location">
            {date} · {location}
          </p>
          <button className="toggle-btn" onClick={() => setSHowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p className="experience-description">{description}</p>}
      </article>
    </div>
  );
};

export default Experience;
