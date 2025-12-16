import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>

              {greeting.nickname && (
                <h2
                  className="greeting-nickname"
                  style={{ color: theme.text }}
                >
                  ( {greeting.nickname} )
                </h2>
              )}

              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              {/* ✅ FIXED ALIGNMENT HERE */}
              <div className="greeting-actions">
                <SocialMedia theme={theme} />

                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>

          {/* ✅ PROFILE IMAGE */}
          <div className="greeting-image-div">
            <img
              src={require("../../assets/images/PrachiPic.png")}
              alt="Prachi Varshney"
              style={{
                width: "280px",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
