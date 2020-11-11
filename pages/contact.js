import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import { Container, Typography } from "@material-ui/core";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <Container>
          <Typography color="black" component="h2" variant="h2">
            Contact Me
          </Typography>
          <div className="contactinfo">
            <div>
              <img src="./img/phone3.png" className="img" />
              <p>0730395854</p>
            </div>
            <div>
              <img src="./img/phone3.png" className="img" />
              <p>0672063229</p>
            </div>

            <div>
              <img src="./img/email13.png" className="img" />
              <p>kgauza.mpe@gmail.com</p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
