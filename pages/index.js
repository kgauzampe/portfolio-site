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
              <Grid container spacing={1} justify="center" align="center">
                <Grid item xs={12} md={12} lg={12}>
                  <Typography component="h1" variant="h2">
                    Mpumelelo Mpe
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography component="h4" variant="h4">
                    Junior Web developer
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button
                    variant="contained"
                    className="aboutBtn"
                    href="/about"
                  >
                    About me
                  </Button>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
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
                </Grid>
              </Grid>
            </center>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
