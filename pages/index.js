import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Grid, Typography, Button } from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-content">
          <Container>
            <center>
              <Typography component="h1" variant="h2">
                Mpumelelo Mpe
              </Typography>

              <Typography component="h4" variant="h4">
                Junior Software Engineer
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
