import { MdEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rvqrwns",
        "template_kzsvrsd",
        form.current,
        "YFFWWhgO2tdyBaTJv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className="title">
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="contact-container">
        <div className="contact-options">
          <a
            href="mailto:eng.rami.suliman@gmail.com"
            className="contact-option option1"
          >
            <MdEmail className="contact-icon" />
            <h4>E-mail</h4>
            <h5>eng.rami.suliman@gmail.com</h5>
          </a>
          <a
            href="https://m.me/ramisoul"
            target="_blank"
            rel="noreferrer"
            className="contact-option option2"
          >
            <SiMessenger className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Rami Suliman</h5>
          </a>
          <a
            href="https://wa.me/79152085096"
            target="_blank"
            rel="noreferrer"
            className="contact-option option3"
          >
            <BsWhatsapp className="contact-icon" />
            <h4>Whatsapp</h4>
            <h5>+7-915-208-50-96</h5>
          </a>
          <article className="contact-option option4">
            <a
              href="https://github.com/ramisoul84"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/ramisoul"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="social-icon" />
            </a>
            <a
              href="https://facebook.com/ramisoul"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="social-icon" />
            </a>
            <a
              href="https://instagram.com/ramisoul"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="social-icon" />
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send a message
          </button>
        </form>
        <div className="contact-social"></div>
      </div>
    </section>
  );
};
export default Contact;
