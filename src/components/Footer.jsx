import React, { useState } from "react";
import RotatingText from "./RotatingText.jsx";
import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import { socialMedia, profileLink } from "../constants";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAIL_USER_ID
      );
      setIsLoading(false);
      toast.success("Email sent successfully!");
      form.reset();
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send message");
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            id="contactMe"
            className={`flex flex-col ${styles.paddingY}`}
          >
            <div className="flex flex-col items-center justify-center min-h-[80vh]">

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center px-4">
                LET'S CONNECT!
              </h1>

              {/* Main Container */}
              <div className="w-full flex justify-center mt-10">
                <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">

                  {/* LEFT SIDE - CONTACT CARD */}
                  <div className="w-full max-w-xl lg:max-w-2xl px-2">
                    <div className="p-5 sm:p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">

                      <p className="text-gray-300 mb-5 text-sm sm:text-base lg:text-lg">
                        If you have any questions or concerns, feel free to
                        contact me. I’m open to work opportunities aligned with my skills.
                      </p>

                      <div className="space-y-6 sm:space-y-8">

                        {/* Phone */}
                        <div className="flex items-center space-x-4">
                          <AiOutlinePhone className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                          <div className="text-gray-400">
                            <h3 className="text-base sm:text-lg font-semibold">Phone</h3>
                            <p className="text-xs sm:text-sm">+91 7056758070</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                          <AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                          <div className="text-gray-400">
                            <h3 className="text-base sm:text-lg font-semibold">Email</h3>
                            <p className="text-xs sm:text-sm break-words">
                              ashukla20062006@gmail.com
                            </p>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center space-x-4">
                          <AiOutlineHome className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                          <div className="text-gray-400">
                            <h3 className="text-base sm:text-lg font-semibold">Location</h3>
                            <p className="text-xs sm:text-sm">Chandigarh, India</p>
                          </div>
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className="flex flex-wrap justify-start mt-6 sm:mt-8">
                        {socialMedia.map((social) => (
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            key={social.id}
                            className="text-white mr-4 mb-3 text-xl sm:text-2xl hover:text-teal-200 transition"
                          >
                            {React.createElement(social.icon)}
                          </a>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* RIGHT SIDE - CTA */}
                  <div className="flex flex-col items-center w-full lg:w-auto">

                    <button
                      className="border-2 border-teal-400 text-white font-bold px-8 sm:px-12 md:px-16 py-2 mt-6 lg:mt-0 rounded-lg animate-pulse hover:shadow-neon hover:shadow-teal-400 transition duration-300 w-full sm:w-auto"
                      onClick={() =>
                        window.open("mailto:ashukla20062006@gmail.com", "_blank")
                      }
                    >
                      Connect now!
                    </button>

                    <div className="mt-6 sm:mt-10">
                      <RotatingText
                        texts={["Any Work?", "Let Me Know!"]}
                        mainClassName="px-3 sm:px-4 bg-cyan-300 text-black overflow-hidden py-2 justify-center rounded-lg text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.015}
                        splitLevelClassName="overflow-hidden pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                      />
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 px-4 sm:px-10">
        <div className="flex flex-wrap justify-center pt-4 gap-4">
          {socialMedia.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={social.id}
              className="text-white text-xl sm:text-2xl hover:text-teal-200 transition"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="text-center text-dimWhite text-xs sm:text-sm py-4">
          <p>
            Made by{" "}
            <a
              href={profileLink}
              className="font-bold text-teal-200 hover:text-teal-300"
            >
              Akshat Shukla
            </a>{" "}
            & the Open Source Community
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;