import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <Container>
          <Typography>Meet Mpumelelo Mpe</Typography>
          <Typography>Junior Web developer</Typography>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
