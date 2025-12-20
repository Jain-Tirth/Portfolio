import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jain Tirth</span>
            from <span className="purple"> Ahemdabad,Gujarat, India.</span>
            <br />
            I am pursuing my Bachelor's in Computer Science and Engineering with major in AI-ML from Adani University.
            <br />
            I have completed my schooling from Seventh Day Adventist Higher Secondary(SDA) School, Ahemdabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport Buzzer
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding Bike
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hustle never stops"{" "}
          </p>
          <footer className="blockquote-footer">Tirth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
