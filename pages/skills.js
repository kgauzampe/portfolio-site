import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Typography } from "@material-ui/core";

export default function Skills() {
  return (
    <>
      <Navbar />
      <div className="skills">
        <Container>
          <center>
            <Typography color="black" component="h2" variant="h2">
              Skills
            </Typography>
            <div className="skills-Banner">
              <ul className="skills-list">
                <li>React</li>
                <li>Javascript </li>
                <li>Nodejs</li>
                <li>Jasmine</li>
                <li>Nextjs</li>
                <li>Material-UI</li>
                <li>Jest</li>
                <li>Docker</li>
              </ul>
            </div>
          </center>
        </Container>
      </div>
      <Footer />
    </>
  );
}
