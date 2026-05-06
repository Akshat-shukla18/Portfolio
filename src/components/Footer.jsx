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

     <div
  className={`bg-primary ${styles.flexCenter} ${styles.paddingX} w-full overflow-hidden`}
>
  <div className={`${styles.boxWidth} w-full`}>
    
    <section
      id="contactMe"
      className={`flex flex-col ${styles.paddingY}`}
    >
      
      <div className="w-full flex flex-col items-center justify-center py-16 sm:py-20">

        {/* HEADING */}
        <h1 className="text-white text-center font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
          LET&apos;S CONNECT!
        </h1>

        {/* MAIN CONTAINER */}
        <div className="w-full max-w-7xl mt-14 flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[58%] flex justify-center">

            <div className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                If you have any questions or concerns, feel free to
                contact me. I’m open to work opportunities aligned with
                my skills and interests.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-8 space-y-7">

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-400/10">
                    <AiOutlinePhone className="text-teal-400 text-xl sm:text-2xl" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Phone
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base">
                      +91 7056758070
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-400/10">
                    <AiOutlineMail className="text-teal-400 text-xl sm:text-2xl" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Email
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base break-all">
                      ashukla20062006@gmail.com
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-400/10">
                    <AiOutlineHome className="text-teal-400 text-xl sm:text-2xl" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Location
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base">
                      Chandigarh, India
                    </p>
                  </div>
                </div>

              </div>

              {/* SOCIAL ICONS */}
              <div className="flex flex-wrap items-center gap-5 mt-10">

                {socialMedia.map((social) => (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={social.id}
                    className="text-white text-2xl hover:text-teal-300 hover:scale-110 transition duration-300"
                  >
                    {React.createElement(social.icon)}
                  </a>
                ))}

              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[42%] flex flex-col items-center justify-center">

            {/* BUTTON */}
            <button
              className="
                border-2 border-teal-400
                text-white font-bold
                px-10 sm:px-14
                py-3 sm:py-4
                rounded-2xl
                text-base sm:text-lg
                hover:bg-teal-400/10
                hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]
                transition-all duration-300
                w-full max-w-[280px]
              "
              onClick={() =>
                window.open(
                  "mailto:ashukla20062006@gmail.com",
                  "_blank"
                )
              }
            >
              Connect Now
            </button>

            {/* ROTATING TEXT */}
            <div className="mt-8 sm:mt-10 flex justify-center">

              <RotatingText
                texts={["Any Work?", "Let Me Know!"]}
                mainClassName="
                  px-5 py-3
                  bg-cyan-300
                  text-black
                  rounded-2xl
                  text-xl sm:text-2xl md:text-3xl
                  font-semibold
                  overflow-hidden
                  text-center
                  shadow-lg
                "
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.015}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2000}
              />

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