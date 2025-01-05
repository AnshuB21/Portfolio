import React, { useEffect, useRef, useState } from "react";
import Img from "../assets/Logo.svg";
const Contact = () => {
  // Reference to the form element
  const formRef = useRef(null);

  // Your Google App Script URL
  const scriptURL =
    "https://docs.google.com/spreadsheets/d/1w7qq-8lHOki-1DMp3BFXc11ghG-1mMVcqNIuTTC2irQ/edit?gid=0#gid=0";

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = formRef.current; // Access the form element

    // Send form data to the Google App Script
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Thank you! Form is submitted");
        window.location.reload(); // Reload the page
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  };
  ////////////////////////////
  const [isLargeScreen, setIsLargeScreen] = useState(false);
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
    <div className="sm:grid grid-cols-2 justify-center ">
      <article className="hidden pl-5 md:block justify-center items-center m-14">
        <img src={Img} className="h-80 lg:h-96" />
      </article>

      <section className="Beforeform">
        <div className="containerr">
          <form ref={formRef} onSubmit={handleSubmit} name="contact-form">
            <h4>Contact Me</h4>
            <input type="text" name="your-name" placeholder="Name" required />
            <input
              type="text"
              name="your-number"
              placeholder="Number"
              required
            />
            <input
              type="email"
              name="your-email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
