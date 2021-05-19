import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Typography } from "@material-ui/core";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <Container>
          <Typography component="h2" variant="h2">
            About Me
          </Typography>
          <center>
            <img src="/img/kgauza.png" alt="grad1img" className="about-img" />
          </center>
          <Typography component="h8" variant="h8">
            I am a software developer growing my skills. 
            A tech graduate, who got the opportunity to intern 
            as a junior software engineer in 2020 and further 
            work as a developer on an upcoming ecommerce based
            company. I'm a huge fan of networking whether it's 
            on the sport field or working on a hackerton. 
            A team player who was a part of an awesome team 
            during the 2020 Global Legal Hackathon and we won 
            the third spot. I am always in search for ways 
            to grow myself and be better in my field.
          </Typography>
        </Container>
      </div>
      <Footer />
    </>
  );
}
