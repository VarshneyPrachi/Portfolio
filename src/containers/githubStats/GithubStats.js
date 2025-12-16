import React from "react";

export default function GithubStats({ theme }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: theme?.text || "#000" }}>
        GitHub Stats
      </h2>

      <img
        src="https://github-readme-stats.vercel.app/api?username=Varhneyprachi&show_icons=true&hide_border=true"
        alt="Prachi Varshney GitHub Stats"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}
