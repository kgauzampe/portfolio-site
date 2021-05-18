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
            I am software devloper who has a keen intrest in advancing my
            software skills and intergrating design with better functionality.
            Throughout the years I have embraced different leadership positions
            from peer faciliation to serving as the Chairperson in the health
            and wellness deparment within my University. Within the tech
            enviroment I have had the pleasure of being part of a team who
            participated in the Global Legal Hackathon in 2020 and we won the
            third spot. Aside from the tech world I am a real lover of contact
            sport and people development. In June 2020 I started my internship
            at Turati Software where I was a Junior Software Engineer which
            ended in November 2020 . With the skills and Knowledge I aqcuired
            during my learnership, internship and as a Junior Software Engineer at Suppl-i I aspire to become a great
            developer, and Full-Stack in the near future.
          </Typography>
        </Container>
      </div>
      <Footer />
    </>
  );
}
