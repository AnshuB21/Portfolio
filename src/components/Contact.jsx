import React, { useEffect, useRef, useState } from "react";
import Img from "../assets/Logo.svg";
import SectionTitle from "./SectionTitle";
import { MdLocationPin } from "react-icons/md";
import { FaLocationArrow, FaMailBulk, FaMap } from "react-icons/fa";
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
    <>
      <div className="mx-12" id="contact">
        <SectionTitle text="Contact" />
      </div>
      <div className="sm:grid grid-cols-2 justify-center">
        {/* Image Section */}
        <article className="hidden pl-5 md:block justify-center items-center m-14">
          <img src={Img} className="h-80 lg:h-96" alt="Contact" />
        </article>

        {/* Contact Form Section */}
        <div>
          <section className="Beforehand ">
            <div className="containerr">
              <form ref={formRef} onSubmit={handleSubmit} name="contact-form">
                <h4>Contact Me</h4>
                <input
                  type="text"
                  name="your-name"
                  placeholder="Name"
                  required
                />
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
          {/* Email and Icon Section */}
          <div className="flex justify-center items-center mx-auto mt-7 space-x-3">
            <FaMailBulk className="text-3xl mb-2" />
            <h3 className="underline">Chettrianshu3@gmail.com</h3>
          </div>
          <div className="flex justify-center items-center mx-auto mt-5 mb-7 space-x-3">
            <MdLocationPin className="text-3xl " />
            <h3> Atlanta-30324, GA, USA</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
