import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineSend,
} from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import { socialMedia, profileLink } from "../constants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.warn("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ashukla20062006@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();
      if (response.ok && data.success !== "false") {
        toast.success("Message sent successfully to Akshat!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      window.location.href = `mailto:ashukla20062006@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
      toast.info("Opened email client with your message.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />

      <div
        className={`bg-primary ${styles.flexCenter} ${styles.paddingX} w-full overflow-hidden`}
      >
        <div className={`${styles.boxWidth} w-full`}>
          <section id="contactMe" className={`flex flex-col ${styles.paddingY}`}>
            <div className="w-full flex flex-col items-center justify-center py-16 sm:py-20">
              {/* HEADING */}
              <h1 className="text-white text-center font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">
                LET&apos;S CONNECT!
              </h1>

              {/* MAIN CONTAINER */}
              <div className="w-full max-w-7xl mt-14 flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-12">
                {/* LEFT SIDE: CONTACT INFO */}
                <div className="w-full lg:w-1/2 flex">
                  <div className="w-full flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                    {/* DESCRIPTION */}
                    <div>
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        If you have any questions, ideas, or work opportunities aligned with my skills and interests, feel free to drop a message or reach out directly!
                      </p>

                      {/* CONTACT INFO */}
                      <div className="mt-8 space-y-6">
                        {/* PHONE */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-teal-400/10 text-teal-400">
                            <AiOutlinePhone className="text-xl sm:text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-base sm:text-lg">Phone</h3>
                            <p className="text-gray-400 text-sm sm:text-base">+91 7056758070</p>
                          </div>
                        </div>

                        {/* EMAIL */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-teal-400/10 text-teal-400">
                            <AiOutlineMail className="text-xl sm:text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-base sm:text-lg">Email</h3>
                            <p className="text-gray-400 text-sm sm:text-base break-all">ashukla20062006@gmail.com</p>
                          </div>
                        </div>

                        {/* LOCATION */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-teal-400/10 text-teal-400">
                            <AiOutlineHome className="text-xl sm:text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-base sm:text-lg">Location</h3>
                            <p className="text-gray-400 text-sm sm:text-base">Chandigarh, India</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-white/10">
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

                {/* RIGHT SIDE: CONTACT FORM */}
                <div className="w-full lg:w-1/2 flex">
                  <form
                    onSubmit={onSubmit}
                    className="w-full flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl gap-5"
                  >
                    <div>
                      <h2 className="text-2xl font-bold font-poppins text-white mb-2">
                        Send a Message
                      </h2>
                      <p className="text-gray-400 text-sm font-poppins">
                        Have a project or opportunity in mind? Send your details below.
                      </p>
                    </div>

                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                      {/* NAME */}
                      <div>
                        <label className="block text-gray-300 text-sm font-poppins font-medium mb-1.5">
                          Your Name
                        </label>
                        <div className="relative flex items-center">
                          <AiOutlineUser className="absolute left-4 text-gray-400 text-lg" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 font-poppins text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* EMAIL */}
                      <div>
                        <label className="block text-gray-300 text-sm font-poppins font-medium mb-1.5">
                          Your Email
                        </label>
                        <div className="relative flex items-center">
                          <AiOutlineMail className="absolute left-4 text-gray-400 text-lg" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 font-poppins text-sm focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* MESSAGE */}
                      <div>
                        <label className="block text-gray-300 text-sm font-poppins font-medium mb-1.5">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, idea, or inquiry..."
                          required
                          className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 font-poppins text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-gray-950 font-bold font-poppins text-base hover:opacity-95 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-gray-950 border-t-transparent rounded-full animate-spin"></span>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>Send Message</span>
                          <AiOutlineSend className="text-lg" />
                        </div>
                      )}
                    </button>
                  </form>
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