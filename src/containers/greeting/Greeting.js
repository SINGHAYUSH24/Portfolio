import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import profile from "../../assets/images/Profile.jpeg";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                <span className="left-part">
                  {greeting.title.split(" ")[0]}
                </span>{" "}
                <span className="right-part">
                  {greeting.title.split(" ")[1]}
                </span>
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Github Repository 🗃️"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {
                <div className="">
                  <Button
                    text="My Resume 📑"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              }
            </div>
          </div>
          <div className="greeting-image-div">
            {
              <img
                alt="Profile Picture"
                src={profile}
                height={200}
                width={500}
                style={{border:`4px solid ${theme.text}`,borderRadius:'250px'}}
              ></img>
            }
          </div>
        </div>
      </div>
    </Fade>
  );
}
