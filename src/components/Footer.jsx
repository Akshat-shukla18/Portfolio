import React, { useState } from "react";
import BlurText from "./BlurText";
import RotatingText from './RotatingText.jsx'
import {
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
  AiFillHome,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import Button from "./Button";
import { profilePic } from "../assets";
import { layout } from "../style";
import {
  CVLink,
  repoLink,
  socialMedia,
  aboutMe,
  profileLink,
} from "../constants";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  function handleAnimationComplete() {
    // Empty handler to fix ReferenceError
  }

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
      toast.success("I'll get back to you soon.");
      form.reset();
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send message");
      toast.error("Please try again.");
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            id="contactMe"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
          >
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-5xl text-white font-bold text-center px-4">
                LET'S CONNECT!
                
              </h1>

              <div className="w-full flex justify-center">
                <div className="flex flex-row items-center justify-center w-full max-w-4xl">
                  <div className="mt-16 w-full max-w-2xl">
                    <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                      <p className="text-gray-300 mb-5 text-base sm:text-sm lg:text-xl">
                        If you have any questions or concerns, please don't
                        hesitate to contact me. I am open to any work
                        opportunities that align with my skills and interests.
                      </p>

                      <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                          <AiOutlinePhone className="w-6 h-6 text-teal-400" />
                          <div className="text-gray-400">
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-sm">+91 7056758070</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <AiOutlineMail className="w-6 h-6 text-teal-400 flex-shrink-0" />
                          <div className="text-gray-400">
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-sm break-words">
                              ashukla20062006@gmail.com
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <AiOutlineHome className="w-6 h-6 text-teal-400" />
                          <div className="text-gray-400">
                            <h3 className="text-lg font-semibold">Location</h3>
                            <p className="text-sm">Chandigarh, India</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-start mt-8">
                        {socialMedia.map((social, index) => (
                          <a
                            href={social.link}
                            target="_blank"
                            key={social.id}
                            className="text-white mr-5 mb-4 text-[25px] hover:text-teal-200"
                          >
                            {React.createElement(social.icon)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
</div>
                    <div className="flex flex-col ml-40 mt-16  items-center">
                     
<button className="col-auto border-2 border-teal-400 text-white font-bold px-20 py-2 mt-16 rounded-lg animate-pulse hover:shadow-neon hover:shadow-teal-400 transition duration-300 mb-4"   onClick={() =>
                window.open("mailto:ashukla20062006@gmail.com", "_blank")
              }
>

    Connect now!
  </button>

  <RotatingText
  texts={[ 'Any Work?','Let Me know!']}
  mainClassName="px-1 sm:px-2 md:px-4 bg-cyan-300 text-black overflow-hidden mt-16 py-1 sm:py-2 md:py-3 justify-center rounded-lg text-4xl sm:text-4xl md:text-4xl"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.015}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
                          </div>
                
              </div>
            </div>
            
          </section>
          {/* <button className="col-auto border-2 border-teal-400 text-white font-bold px-20 py-2  rounded-lg animate-pulse hover:shadow-neon hover:shadow-teal-400 transition duration-300 mb-2">
                           Get Started
                           </button>  */}
        </div>
      </div>

      <footer className="bg-gray-900 sm:px-16 px-6">
        <div className="flex flex-row mt-4 justify-center pt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
            
          ))}
        </div>
        

        <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
          <p>
            Made by{" "}
            <a
              href={profileLink}
              className="font-bold text-teal-200 font-poppins dark:text-white hover:text-teal-200 dark:hover:text-gray-300"
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
