import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    // ✅ SAFE DEFAULTS
    const {
      contactSection = {},
      blogSection = {},
      addressSection = {},
      phoneSection = {},
    } = contactPageData || {};

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">

              {/* ✅ PROFILE IMAGE */}
              <div className="contact-heading-img-div">
                <img
                  src={require("../../assets/images/PrachiPic.png")}
                  alt="Prachi"
                  style={{
                    width: "220px",
                    borderRadius: "50%",
                    marginBottom: "20px",
                  }}
                />
              </div>

              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {contactSection.title || "Contact Me"}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {contactSection.description || ""}
                </p>

                <SocialMedia theme={theme} />

                {greeting.resumeLink && (
                  <div className="resume-btn-div">
                    <Button
                      text="See My Resume"
                      newTab
                      href={greeting.resumeLink}
                      theme={theme}
                    />
                  </div>
                )}
              </div>
            </div>
          </Fade>

          {/* BLOG SECTION */}
          {blogSection.title && (
            <Fade bottom duration={1000} distance="40px">
              <div className="blog-heading-div">
                <div className="blog-heading-text-div">
                  <h1 style={{ color: theme.text }}>
                    {blogSection.title}
                  </h1>

                  <p
                    className="subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {blogSection.subtitle}
                  </p>

                  {blogSection.link && (
                    <Button
                      text="Visit My Blogsite"
                      newTab
                      href={blogSection.link}
                      theme={theme}
                    />
                  )}
                </div>

                <div className="blog-heading-img-div">
                  <BlogsImg theme={theme} />
                </div>
              </div>
            </Fade>
          )}

          {/* ADDRESS / PHONE */}
          {(addressSection.title || phoneSection.title) && (
            <Fade bottom duration={1000} distance="40px">
              <div className="address-heading-div">
                <div className="contact-heading-img-div">
                  <AddressImg theme={theme} />
                </div>

                <div className="address-heading-text-div">
                  {addressSection.title && (
                    <>
                      <h1 style={{ color: theme.text }}>
                        {addressSection.title}
                      </h1>
                      <p
                        className="subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {addressSection.subtitle}
                      </p>
                    </>
                  )}

                  {phoneSection.title && (
                    <>
                      <h1 style={{ color: theme.text }}>
                        {phoneSection.title}
                      </h1>
                      <p
                        className="subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {phoneSection.subtitle}
                      </p>
                    </>
                  )}

                  {addressSection.location_map_link && (
                    <Button
                      text="Visit on Google Maps"
                      newTab
                      href={addressSection.location_map_link}
                      theme={theme}
                    />
                  )}
                </div>
              </div>
            </Fade>
          )}
        </div>

        <Footer theme={theme} />
      </div>
    );
  }
}

export default Contact;
