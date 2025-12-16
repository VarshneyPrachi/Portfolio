import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  const node = repo.node || repo; // supports both GitHub API + custom data

  function openRepoinNewTab(url) {
    if (!url) return;
    window.open(url, "_blank");
  }

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme?.highlight }}
      onClick={() => openRepoinNewTab(node.url)}
    >
      <Fade bottom duration={1000} distance="20px">
        <div>
          {/* Repo Name */}
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme?.text }}>
              {node.nameWithOwner || "My Project"}
            </p>
          </div>

          {/* Description */}
          <p className="repo-description" style={{ color: theme?.text }}>
            {node.description || "No description available"}
          </p>

          {/* Language */}
          {node.primaryLanguage && (
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme?.secondaryText }}
            >
              {node.primaryLanguage.name}
            </p>
          )}
        </div>
      </Fade>
    </div>
  );
}
