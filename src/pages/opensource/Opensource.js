import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Projects from "../projects/Projects";
import GithubStats from "../../containers/githubStats/GithubStats";
import LeetcodeStats from "../../containers/leetcodeStats/LeetcodeStats";

export default function Opensource(props) {
  const theme = props.theme;

  return (
    <div>
      <Header theme={theme} />

      <Projects theme={theme} />

      <GithubStats theme={theme} />
      <LeetcodeStats theme={theme} />

      <Footer theme={theme} />
    </div>
  );
}
