
import React, { useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function scrollFunction() {
      const btn = document.getElementById("topButton");
      if (!btn) return;

      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        btn.style.visibility = "visible";
      } else {
        btn.style.visibility = "hidden";
      }
    }

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const onMouseEnter = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (!topButton || !arrow) return;

    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (!topButton || !arrow) return;

    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      id="topButton"
      onClick={GoUpEvent}
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `1px solid ${theme.text}`,
        visibility: "hidden",
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
