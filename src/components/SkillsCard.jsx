import React, { useState, useEffect } from "react";

const SkillsCard = ({ icon, title, text }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Track screen size
  const [isExpanded, setIsExpanded] = useState(false); // Track "Show More/Show Less" state

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Treat screens >= 1024px as large
    };

    // Initial check and add listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="bg-blue-50 rounded-xl cursor-pointer hover:scale-105 hover:shadow-xl p-6">
      <div>
        <span>{icon}</span>
        <h4 className="mt-6 font-bold">{title}</h4>
        {isLargeScreen ? (
          <p className="mt-2 text-slate-500">{text}</p>
        ) : (
          <>
            {isExpanded ? (
              // Show full text when expanded
              <>
                <p className="mt-2 text-slate-500">{text}</p>
                <button
                  className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => setIsExpanded(false)}
                >
                  Show Less
                </button>
              </>
            ) : (
              // Show truncated text when not expanded
              <>
                <p className="mt-2 text-slate-500 truncate">
                  {text.substring(0, 20)}...
                </p>
                <button
                  className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => setIsExpanded(true)}
                >
                  Show More
                </button>
              </>
            )}
          </>
        )}
      </div>
    </article>
  );
};

export default SkillsCard;
