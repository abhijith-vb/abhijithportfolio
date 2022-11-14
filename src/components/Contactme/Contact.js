import React from "react";
import "./Contact.css";
import abhijith from "../Images/abhijith.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nof1hv7",
        "template_4hgvr7e",
        form.current,
        "d-Jw8FNajgLnCJNpD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col headings">
          <h1>Contact Me</h1>
          <div className="form">
            {/* <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name*"
                name="user_name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Your Email*"
                name="user_email"
              />

              <textarea
                className="form-control"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <button type="submit" className=" buton">
                submit
              </button>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="img-bottom">
            <img src={abhijith} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
