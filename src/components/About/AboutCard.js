import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adeniran Stephen</span> from <span className="purple"> Ogun, Nigeria.</span>
            <br />I am a graduate of Computer Science.
            <br />
            <br />
          </p>

          
          <ul>
          <h3 className="about-activity">FRONTEND DEVELOPMENT</h3>
            <li className="about-activity">
              <ImPointRight /> HTML
            </li>
            <li className="about-activity">
              <ImPointRight /> CSS
            </li>
            <li className="about-activity">
              <ImPointRight /> JavaScript
            </li>
            <li className="about-activity">
              <ImPointRight /> Bootstrap
            </li>
            <li className="about-activity">
              <ImPointRight /> React Js
            </li>
            <br />
            
            <h3 className="about-activity">BACKEND DEVELOPMENT</h3>
            <li className="about-activity">
              <ImPointRight /> PHP
            </li>
            <li className="about-activity">
              <ImPointRight /> Laravel
            </li>
            <li className="about-activity">
              <ImPointRight /> Python
            </li>
            <li className="about-activity">
              <ImPointRight />Node js
            </li>
            <br/>

            <h3 className="about-activity">DATABASES</h3>
             <li className="about-activity">
              <ImPointRight /> MySQL
            </li>
            <li className="about-activity">
              <ImPointRight /> MangoDB
            </li>
            <li className="about-activity">
              <ImPointRight /> Express
            </li>  
            <br />
            <h3 className="about-activity">VERSION CONTROL</h3> 
            <li className="about-activity">
              <ImPointRight /> GIT
            </li>
            <li className="about-activity">
              <ImPointRight /> TFS
            </li>     
            
          </ul>
          
          <p>"Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Stephen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

