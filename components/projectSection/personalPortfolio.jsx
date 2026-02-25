import React from "react";
import "./projectSection.css";

export const PersonalPortfolio = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src="/images/ReactLogo.png" alt="Portfolio" />
      <div className="projectDescrContainer">
        <h3>Personal Portfolio</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque illo
          veniam consectetur minus corrupti autem suscipit? Praesentium quia id
          voluptas animi, aliquam ipsa, velit eaque quidem at tempora magnam
          non.
        </p>
        <li>Task one</li>
        <li>Task two</li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">React</p>
          <p className="usedLang">Javascript</p>
          <p className="usedLang">CSS3</p>
        </div>
        <div className="divider" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBlock: 10,
          }}
        >
          <a href="https://github.com/KSanders04/Zombie-Land-Game">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
