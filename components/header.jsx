import "./header.css";
import React from "react";

export const Header = () => {
  function downloadFile() {
    const link = document.createElement("a");
    link.href = "/files/KyleSandersResume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="topContainer">
      <div>
        <h2 className="gradientName">Kyle Sanders</h2>
      </div>
      <div className="menuGroup">
        <a href="#aboutMeSection" className="menuTitles">
          About Me
        </a>
        <a href="#languageSection" className="menuTitles">
          Languages
        </a>
        <a href="#projectSection" className="menuTitles">
          Projects
        </a>
        <a href="#contactFooter" className="menuTitles">
          Contact
        </a>
      </div>
      <div className="resumeContainer ">
        <button onClick={downloadFile} className="resumeButton">
          Resume
        </button>
      </div>
    </div>
  );
};
