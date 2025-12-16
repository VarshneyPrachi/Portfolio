import React from "react";

export default function LeetcodeStats({ theme }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: theme?.text || "#000" }}>
        LeetCode Stats
      </h2>

      <img
        src="https://leetcard.jacoblin.cool/Varshneyprachi?theme=light&font=Karma&hide_border=true"
        alt="Prachi Varshney LeetCode Stats"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}
