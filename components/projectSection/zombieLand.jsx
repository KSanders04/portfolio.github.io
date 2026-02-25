import React from "react";
import "./projectSection.css";
import zombieLandHome from "../../src/assets/images/zombieLandHome.png";

export const ZombieLand = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={zombieLandHome} alt="Zombie Land" />
      <div className="projectDescrContainer">
        <h3>Zombie Land</h3>
        <p className="description">
          A python application that allows users to play a top down shooter game
          where you try to shoot as many zombies as possible
        </p>
        <li>Scoring feature showing how many zombies you have killed in the game</li>
        <li>Reloading feature where a user only has a certain amout of bullets before they have to reload</li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">Python</p>
          <p className="usedLang">Pygame</p>
          <p className="usedLang">SimpleGe</p>
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
