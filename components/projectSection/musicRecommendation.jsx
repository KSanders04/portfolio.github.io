import React from "react";
import "./projectSection.css";
import musicRecommendation from "../../src/assets/images/musicRecommendation.png";

export const MusicRecommendation = () => {
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={musicRecommendation} alt="Music Recommendation" />
      <div className="projectDescrContainer">
        <h3>Music Recommendation</h3>
        <p className="description">
          A java swing application that recommends five artists and five songs
          that meet the selected genre.
        </p>
        <li>
          Choose whether you want to view artists, songs or both after choosing
          which genre you want to discover
        </li>
        <li>
          Users are able to save songs and replay songs inside there
          personalized playlist
        </li>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingBlock: 10,
          }}
        >
          <p className="usedLang">Java</p>
          <p className="usedLang">Java Swing</p>
          <p className="usedLang">Jamendo API</p>
        </div>
        <div className="divider" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBlock: 10,
          }}
        >
          <a href="https://github.com/KSanders04/Music-Recommendation">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
