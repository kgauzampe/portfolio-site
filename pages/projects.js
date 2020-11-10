import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Typography } from "@material-ui/core";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <Container>
        <Typography>projects</Typography>
      </Container>
      <Footer />
    </div>
  );
}
