import React from "react";
import { codingProfiles } from "../../portfolio";

export default function CodingProfiles({ theme }) {
  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h1 style={{ color: theme.text }}>DSA & Coding Profiles</h1>

      <p style={{ color: theme.secondaryText, fontSize: "18px" }}>
        <span role="img" aria-label="puzzle">
          🧩
        </span>{" "}
        DSA: {codingProfiles.leetcode.solved} problems solved on{" "}
        <a
          href={codingProfiles.leetcode.profileLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.text, fontWeight: "bold" }}
        >
          LeetCode
        </a>
      </p>

      {codingProfiles.leetcode.streak && (
        <p style={{ color: theme.secondaryText }}>
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          Current Streak: {codingProfiles.leetcode.streak}
        </p>
      )}

      <p style={{ color: theme.secondaryText }}>
        <span role="img" aria-label="github">
          🐙
        </span>{" "}
        GitHub:{" "}
        <a
          href={codingProfiles.github.profileLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.text, fontWeight: "bold" }}
        >
          {codingProfiles.github.username}
        </a>
      </p>
    </div>
  );
}
