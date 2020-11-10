import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Grid, Typography, Button } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="home-content">
          <Container>
            <center>
              <Typography color="black" component="h1" variant="h2">
                Mpumelelo Mpe
              </Typography>
              <Typography component="h2" variant="h3">
                Junior Web developer
              </Typography>
              <Button variant="contained" className="aboutBtn" href="/about">
                About me
              </Button>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/kgauzampe"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* linkedin */}
                <a
                  href="https://github.com/kgauzampe"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </div>
            </center>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
