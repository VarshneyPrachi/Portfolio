import React from "react";
import "./Projects.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

const MY_PROJECTS = [
  {
    id: "medisync",
    node: {
      nameWithOwner: "MediSync – Appointment Scheduler",
      description:
        "MERN stack appointment booking system with JWT authentication and automated reminders.",
      url: "https://medi-sync-wwy7.vercel.app/",
      primaryLanguage: { name: "JavaScript", color: "#f1e05a" }
    },
  },
  {
    id: "foodsaver",
    node: {
      nameWithOwner: "FoodSaver – AI Powered Food Waste Reduction",
      description:
        "Full-stack app with Firebase authentication and pantry tracking.",
      url: "https://food-saver-ecru.vercel.app/",
      primaryLanguage: { name: "JavaScript", color: "#f1e05a" }
    },
  },
  {
    id: "movie-reco",
    node: {
      nameWithOwner: "Movie Recommendation System",
      description:
        "Machine-learning based recommendation system with web interface.",
      url: "https://movie-recommendation-sass.onrender.com/",
      primaryLanguage: { name: "Python", color: "#3572A5" }
    },
  },
];

export default function Projects(props) {
  const theme = props.theme || {
    text: "#000",
    highlight: "#f5f5f5",
    secondaryText: "#666",
  };

  return (
    <div className="projects-main">
      <h1 className="projects-heading-text" style={{ color: theme.text }}>
        Projects
      </h1>

      <div className="repo-cards-div-main">
        {MY_PROJECTS.map((repo) => (
          <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
        ))}
      </div>

      <Button
        text="More Projects"
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
    </div>
  );
}
