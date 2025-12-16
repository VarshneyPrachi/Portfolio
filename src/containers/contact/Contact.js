import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData } from "../../portfolio";

export default function Contact() {
  const contact = contactPageData.contactSection;

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contact.title}</h1>
          <p className="subTitle contact-subtitle">{contact.description}</p>

          <div className="contact-text-div">
            <SocialMedia />
          </div>
        </div>

        {/* image REMOVED to prevent module error */}
        <div className="contact-image-div"></div>
      </div>
    </div>
  );
}
