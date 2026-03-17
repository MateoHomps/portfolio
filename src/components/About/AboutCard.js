import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mateo Homps</span>{" "}
            from <span className="purple">Tandil, Argentina</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Bartender</span> while{" "}
            completing my{" "}
            <span className="purple"> Associate Degree in Software Development</span>{" "}
            and building experience as a{" "}
            <span className="purple"> Frontend Developer</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos 📺
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying drink mate 🧉
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The life is better with a mate 🧉"{" "}
          </p>
          <footer className="blockquote-footer">Mateo Homps</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
