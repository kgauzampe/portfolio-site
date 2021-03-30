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
            software skills and intergrating design with better
            functionality.Throughout the years I have embraced different
            leadership positions from peer faciliation to serving as the
            Chairperson in the health and wellness deparment within my
            University. Within the tech enviroment I have had the pleasure of
            being part of a team who participated in the Global Legal Hackathon
            in 2020 and we won the third spot. Aside from the tech world I am a
            real lover of contact sport and people development. In June i
            started my internship at Turati Software where i was a Junior
            Software Engineer which ended in November. With the skills and
            Knowledge i aqcuired during my learnership and internship i aspire
            to become a great frontend developer.
          </Typography>
        </Container>
      </div>
      <Footer />
    </>
  );
}
